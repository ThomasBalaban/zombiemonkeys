from rest_framework import serializers
from .models import Podcast

class PodcastSerializer(serializers.ModelSerializer):
    class Meta:
        model = Podcast
        fields = ['user', 'podcast_title', 'podcast_summery', 'podcast', 'created_date']