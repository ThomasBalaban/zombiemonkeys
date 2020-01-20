from django.db import models
from django.utils import timezone
from django.utils.safestring import mark_safe
from django.conf import settings

class Video(models.Model):
    user = models.ForeignKey(settings.AUTH_USER_MODEL, default=1, on_delete=models.SET_DEFAULT)
    video_title = models.CharField(max_length=255)
    video_description = models.TextField(blank=True) #blank allows this to be empty
    video = models.FileField(upload_to='video/', null=True)
    video_thumbnail = models.ImageField(upload_to='video/video_thumbnails', blank=True)
    created_date = models.DateTimeField(default=timezone.now)

    class Promo(models.IntegerChoices):
        NONPROMO = 0
        PROMO = 1
        BIGPROMO = 2
        HUGEPROMO = 3

    promoted = models.IntegerField(choices=Promo.choices, default=0)

    def video_tag(self):
        return mark_safe('<img src="%s" style="width: auto; height: 80px;" />' % (self.video_thumbnail.url))

    video_tag.short_description = 'Image'
    video_tag.allow_tags = True

    def __str__(self):
        return self.video_title

class Comment(models.Model):
    post = models.ForeignKey('videos.Video', on_delete=models.CASCADE, related_name='comments')
    user = models.ForeignKey(settings.AUTH_USER_MODEL, default=1, on_delete=models.SET_DEFAULT)
    text = models.TextField()
    created_date = models.DateTimeField(default=timezone.now)

class Tag(models.Model):
    post = models.ForeignKey('videos.Video', on_delete=models.CASCADE, related_name='tags')
    user = models.ForeignKey(settings.AUTH_USER_MODEL, default=1, on_delete=models.SET_DEFAULT)
    tag = models.CharField(max_length=50)
    created_date = models.DateTimeField(default=timezone.now)