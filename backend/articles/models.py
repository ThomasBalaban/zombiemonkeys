from django.db import models
from django.utils import timezone
from django.utils.safestring import mark_safe
from django.conf import settings

# Create your models here.
class Article(models.Model):
    user = models.ForeignKey(settings.AUTH_USER_MODEL, default=1, on_delete=models.SET_DEFAULT)
    article_title = models.CharField(max_length = 255)
    article_summery = models.CharField(max_length = 400, blank=True)
    article_text = models.TextField(blank=True)
    article_poster = models.ImageField(upload_to='articles/article_poster')
    article_header = models.ImageField(upload_to='articles/article_header')
    created_date = models.DateTimeField(default=timezone.now)
    revised_date = models.DateTimeField(auto_now=True)


    def article_posterImg(self):
        return mark_safe('<img src="%s" style="width: auto; height: 80px;" />' % (self.article_poster.url))

    article_posterImg.short_description = 'Image'
    article_posterImg.allow_tags = True

    def __str__(self):
        return self.article_title