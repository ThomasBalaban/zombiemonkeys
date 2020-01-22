from django.db import models
from django.utils import timezone
from django.utils.safestring import mark_safe
from django.conf import settings

# Create your models here.
class Podcast(models.Model):
    user = models.ForeignKey(settings.AUTH_USER_MODEL, default=1, on_delete=models.SET_DEFAULT)
    podcast_title = models.CharField(max_length = 255)
    podcast_summery = models.CharField(max_length = 400, blank=True)
    podcast = models.FileField(upload_to='podcast/', null=True)
    created_date = models.DateTimeField(default=timezone.now)

    class Promo(models.IntegerChoices):
        NONPROMO = 0
        PROMO = 1
        BIGPROMO = 2
        HUGEPROMO = 3

    promoted = models.IntegerField(choices=Promo.choices, default=0)

class Comment(models.Model):
    post = models.ForeignKey(Podcast, on_delete=models.CASCADE, related_name='comments')
    user = models.ForeignKey(settings.AUTH_USER_MODEL, default=1, on_delete=models.SET_DEFAULT, related_name='podcast_user')
    text = models.TextField()
    created_date = models.DateTimeField(default=timezone.now)

class Tag(models.Model):
    post = models.ForeignKey(Podcast, on_delete=models.CASCADE, related_name='tags')
    user = models.ForeignKey(settings.AUTH_USER_MODEL, default=1, on_delete=models.SET_DEFAULT, related_name='podcast_tag')
    tag = models.CharField(max_length=50)
    created_date = models.DateTimeField(default=timezone.now)