from rest_framework import serializers
from .models import Video#, VideoNumber, MovieCharacter, Auther

# class VideoNumberSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = VideoNumber
#         fields = ['id', 'isbn_10', 'isbn_13']

# class VideoCharacterSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = MovieCharacter
#         fields = ['id', 'name']

# class AutherSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = Auther
#         fields = ['id', 'fname', 'lname']

class VideoSerializer(serializers.ModelSerializer):
    #number = VideoNumberSerializer(many=False)
    #character = VideoCharacterSerializer(many=True)
    #authers = AutherSerializer(many=True)

    class Meta:
        model = Video
        fields = ['id', 'user', 'video_title', 'video_description', 'video', 'video_thumbnail', 'created_date']
