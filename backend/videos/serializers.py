from rest_framework import serializers
from .models import Video, Comment#, VideoNumber, MovieCharacter, Auther

class VideoCommentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Comment
        fields = ['post', 'user', 'text', 'created_date']


class VideoSerializer(serializers.ModelSerializer):
    comments = VideoCommentSerializer(many=True)

    class Meta:
        model = Video
        fields = ['id', 'user', 'video_title', 'video_description', 'video', 'video_thumbnail', 'created_date', 'comments']
