from rest_framework import serializers
from django.contrib.auth.models import User
from .models import UserProfile

class UserPhotoSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserProfile
        fields = ['user_picture', 'user_real_name']

class UserSerializer(serializers.ModelSerializer):
    extra_user_info = UserPhotoSerializer(many=True)

    class Meta:
        model = User
        fields = ['id', 'username', 'password', 'last_login', 'date_joined', 'extra_user_info']
        extra_kwargs = {'password': {'write_only': True, 'required': True}} #Can't see can only write, required to register it

    def create(self, validated_data):
        user = User.objects.create_user(**validated_data)
        return user
        