from rest_framework import serializers
from .models import Podcast, Comment, Tag

class PodcastCommentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Comment
        fields = ['post', 'user', 'text', 'created_date']

class PodcastTagSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tag
        fields = ['post', 'user', 'tag', 'created_date']

class PodcastSerializer(serializers.ModelSerializer):
    comments = PodcastCommentSerializer(many=True)
    tags = PodcastTagSerializer(many=True)

    class Meta:
        model = Podcast
        fields = ['id', 'user', 'podcast_title', 'promoted', 'podcast_summery', 'podcast', 'created_date', 'comments', 'tags']