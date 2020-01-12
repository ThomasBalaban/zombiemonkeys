from django.db import models
from django.utils import timezone
from django.utils.safestring import mark_safe
from django.conf import settings

#class VideoNumber(models.Model): #one to one
#    isbn_10 = models.CharField(max_length=10, blank=True)
#    isbn_13 = models.CharField(max_length=13, blank=True)

class Video(models.Model):
    user = models.ForeignKey(settings.AUTH_USER_MODEL, default=1, on_delete=models.SET_DEFAULT)
    video_title = models.CharField(max_length=255)
    video_description = models.TextField(blank=True) #blank allows this to be empty
    video = models.CharField(max_length=255)
    video_thumbnail = models.ImageField(upload_to='video/video_thumbnails', blank=True)
    created_date = models.DateTimeField(default=timezone.now)
    #number = models.OneToOneField(VideoNumber, null=True, blank=True, on_delete=models.CASCADE) #CASCADE will also delete the objects that have references to it here

    def video_tag(self):
        return mark_safe('<img src="%s" style="width: auto; height: 80px;" />' % (self.video_thumbnail.url))

    video_tag.short_description = 'Image'
    video_tag.allow_tags = True

    def __str__(self):
        return self.video_title

# class MovieCharacter(models.Model): #one to many
#     name = models.CharField(max_length=30)
#     movie = models.ForeignKey(Video, on_delete=models.CASCADE, related_name='character')

# class Auther(models.Model): #many to many
#     fname = models.CharField(max_length=30)
#     lname = models.CharField(max_length=30)
#     videos = models.ManyToManyField(Video, related_name='authers')