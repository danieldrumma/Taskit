from groupapi.models import Group
from rest_framework import serializers

class GroupSerializer(serializers.ModelSerializer):
    members = serializers.StringRelatedField(many=True, required=True)
    tasks = serializers.StringRelatedField(many=True, required=False)
    class Meta:
        model = Group
        fields = ('title', 'image', 'description', 'members', 'tasks')
