from profileapi.models import Profile
from profileapi.serializers import ProfileSerializer
from rest_framework import generics, status
from rest_framework.response import Response
from django.core.exceptions import ObjectDoesNotExist
from django.views.decorators.csrf import csrf_exempt

class Profiles(generics.ListCreateAPIView):
    queryset = Profile.objects.all()
    serializer_class = ProfileSerializer
    search_fields = ('^username',)

    def create(self, request, *args, **kwargs):
        """
        Create a new user with given data. Returns all relevant data.

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
        Return profile information for given user
        """
        serializer = ProfileSerializer(self.request.data['username'])
        return Response(serializer.data)

class Login(generics.ListCreateAPIView):
    @csrf_exempt
    def create(self, request):
        """
        Login view - verifies tha user is valid and returns information about user for profile page setup.
        """
        try:
            user = Profile.objects.get(username=self.request.data["username"])

        except ObjectDoesNotExist:
            return Response({'success': 'false','message':'User does not exist.'}, status=status.HTTP_400_BAD_REQUEST)
        if user.password == self.request.data["password"]:
            serializer = ProfileSerializer(user)
            return Response(serializer.data)
        else:
            return Response({'success':'false', 'message':'Password is incorrect.'})
