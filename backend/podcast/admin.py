from django.contrib import admin
from .models import Podcast, Comment, Tag

class Comments(admin.TabularInline):
    model = Comment
    extra = 0

class Tags(admin.TabularInline):
    model = Tag
    extra = 0

@admin.register(Comment)
class CommentAdmin(admin.ModelAdmin):
    fields = ['post', 'user', 'text', 'created_date']
    list_display = ['post', 'user', 'text', 'created_date']

@admin.register(Tag)
class TagAdmin(admin.ModelAdmin):
    fields = ['post', 'user', 'tag', 'created_date']
    list_display = ['post', 'user', 'tag', 'created_date']

class PodcastAdmin(admin.ModelAdmin):
    fields = ['user', 'podcast_title', 'podcast_summery', 'podcast', 'promoted','created_date']
    list_display = ['podcast_title', 'podcast_summery', 'user']
    search_fields = ['podcast_title', 'podcast_summery', 'user']
    list_filter = ['user', 'created_date']
    inlines = [ Tags, Comments ]

admin.site.register(Podcast, PodcastAdmin)
