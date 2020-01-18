from django.contrib import admin
from .models import Podcast

# Register your models here.
@admin.register(Podcast)
class PodcastAdmin(admin.ModelAdmin):
    fields = ['user', 'podcast_title', 'podcast_summery', 'podcast', 'created_date']
    list_display = ['podcast_title', 'podcast_summery', 'user']
    search_fields = ['podcast_title', 'podcast_summery', 'user']
    list_filter = ['user', 'created_date']