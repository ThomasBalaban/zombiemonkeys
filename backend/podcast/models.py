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
