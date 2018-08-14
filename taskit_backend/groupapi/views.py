from groupapi.models import Group
from profileapi.models import Profile
from groupapi.serializers import GroupSerializer
from rest_framework import generics, status
from rest_framework.response import Response
from django.core.exceptions import ObjectDoesNotExist
from django.views.decorators.csrf import csrf_exempt

class Groups(generics.ListCreateAPIView):
    queryset = Group.objects.all()
    serializer_class = GroupSerializer
    search_fields = ('^username',)

    def create(self, request, *args, **kwargs):
        """
        Create a group  and returns all data relevant to group.
        Various error handling.
        """
        # check date is valid

        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)

        try:
            serializer.save()
        except ValueError as e:
            return Response({'success': 'False', 'message': str(e)},
                            status=status.HTTP_500_INTERNAL_SERVER_ERROR)

        headers = self.get_success_headers(serializer.data)
        response_data = {
            "success": "True",
            "message": "Profile Created",
            "profile": serializer.data
        }
        return Response(response_data, status=status.HTTP_201_CREATED, headers=headers)

    def get(self, request):
        """
        Access to group information.
        Requires username of user currently attempting to access group and group.
        {'username':'xxxx', 'group':'xxxx'}
        """
        try:
            user = Profile.objects.get(username=self.request.data['user'])
        except ObjectDoesNotExist:
            return Response({'message': 'Username is incorrect.'})
        try:
            grp = Group.objects.get(title=self.request.data['title'])
        except ObjectDoesNotExist:
            return Response({'message': 'Group name is incorrect.'})
        if user not in grp.members:
            return Response({'message': 'User is not authorized to access this group.'})
        serializer = self.get_serializer(self.request.data['title'])
        return Response(serializer.data)


    def update(self, request):
        """
        Add a new user to a group. Adds to user and group's related lists.

        {'username':'xxxx', 'group':'xxxx'}
        """
        try:
            user = Profile.objects.get(username=self.request.data['user'])
        except ObjectDoesNotExist:
            return Response({'message': 'Username is incorrect.'})
        try:
            grp = Group.objects.get(title=self.request.data['title'])
        except ObjectDoesNotExist:
            return Response({'message': 'Group name is incorrect.'})
        grp.members.add(user)
        grp.save()
        user.curr_groups.add(grp)
        user.save()
        return Response({'message': 'User added to group.', 'success': 'true'})

