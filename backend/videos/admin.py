from django.contrib import admin
from .models import Video, Comment #, VideoNumber, MovieCharacter, Auther

# Register your models here.
@admin.register(Video)
class VideoAdmin(admin.ModelAdmin):
    fields = ['user', 'video_title', 'video_description', 'video', 'video_thumbnail', 'created_date']
    list_display = ['video_title', 'video_description', 'video_tag', 'user']
    search_fields = ['video_title', 'video_description', 'user']
    list_filter = ['user', 'created_date']

@admin.register(Comment)
class CommentAdmin(admin.ModelAdmin):
    fields = ['post', 'user', 'text', 'created_date']
    list_display = ['post', 'user', 'text', 'created_date']

#admin.site.register(VideoNumber)
#admin.site.register(MovieCharacter)
#admin.site.register(Auther)
