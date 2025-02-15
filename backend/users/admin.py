from django.contrib import admin
from .models import UserProfile

# Register your models here.
class UserProfileAdmin(admin.ModelAdmin):
    list_display = ['user', 'user_real_name', 'user_picture']

admin.site.register(UserProfile, UserProfileAdmin)