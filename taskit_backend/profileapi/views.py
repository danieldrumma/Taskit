from profileapi.models import Profile
from profileapi.serializers import ProfileSerializer
from rest_framework import generics, status
from rest_framework.response import Response


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
        except AuthError as e:
            return Response({'success': 'False', 'message': str(e)},
                            status=status.HTTP_500_INTERNAL_SERVER_ERROR)
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