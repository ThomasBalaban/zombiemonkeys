from rest_framework import serializers
from .models import Video, Comment, Tag

class VideoCommentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Comment
        fields = ['post', 'user', 'text', 'created_date']

class VideoTagSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tag
        fields = ['post', 'user', 'tag', 'created_date']


class VideoSerializer(serializers.ModelSerializer):
    comments = VideoCommentSerializer(many=True)
    tags = VideoTagSerializer(many=True)

    class Meta:
        model = Video
        fields = ['id', 'user', 'video_title', 'video_description', 'video', 'video_thumbnail', 'promoted', 'created_date', 'comments', 'tags']
