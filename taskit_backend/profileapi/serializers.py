from profileapi.models import Profile
from rest_framework import serializers

class ProfileSerializer(serializers.ModelSerializer):
    contacts = serializers.StringRelatedField(many=True, read_only=True)
    curr_groups = serializers.StringRelatedField(many=True,required=False)
    history = serializers.StringRelatedField(many=True)
    active = serializers.StringRelatedField(many=True)
    class Meta:
        model = Profile
        fields = ('username', 'contacts', 'history', 'curr_groups','points', 'active', 'role', 'password')
        extra_kwargs = {"username": {"error_messages": {"required": "Give yourself a username"}},
                        'password': {"error_messages": {"required": "Password is required."}}}

class ProfileSimpleSerializer(serializers.ModelSerializer):
    class Meta:
        model = Profile
        fields = ('username', 'history')

