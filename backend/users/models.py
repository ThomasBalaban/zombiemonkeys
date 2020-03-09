from django.db import models
from django.contrib.auth.models import User

class UserProfile(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='extra_user_info')
    user_picture = models.ImageField(blank=True, upload_to="users/profilepics")
    user_real_name = models.CharField(blank=True, max_length=255)

    def user_profileImg(self):
        return mark_safe('<img src="%s" style="width: auto; height: 80px;" />' % (self.article_poster.url))
 

    user_profileImg.short_description = 'Image'
    user_profileImg.allow_tags = True