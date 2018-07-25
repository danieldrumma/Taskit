from profileapi.models import Profile
from profileapi.serializers import ProfileSerializer
from rest_framework import generics, status
from rest_framework.response import Response
from django.core.exceptions import ObjectDoesNotExist


class Profiles(generics.ListCreateAPIView):
    queryset = Profile.objects.all()
    serializer_class = ProfileSerializer
    search_fields = ('^username',)

    def create(self, request, *args, **kwargs):
        """

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

    def login(self, request):
        try:
            user = self.queryset.get(username=request.data.username)
        except ObjectDoesNotExist:
            return Response({'success': 'false','message':'User does not exist.'}, status=status.HTTP_400_BAD_REQUEST)
        if user.password == request.data.password:
            #once logged in - jjj
            return Response({'success':'true' ,'message':'User is valid.'})


    def serve(self, user):
        serializer = ProfileSerializer(user)
        return Response(serializer.data)
