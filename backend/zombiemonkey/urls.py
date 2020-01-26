"""zombiemonkey URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.conf.urls import url
from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static
from rest_framework.authtoken.views import obtain_auth_token
from django.views.generic.base import TemplateView
from .views import CustomObtainAuthToken


urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/videos/', include('videos.urls')),
    path('api/articles/', include('articles.urls')),
    path('api/podcast/', include('podcast.urls')),
    path('api/users/', include('users.urls')),
    path('auth/', obtain_auth_token),
    url('login/', CustomObtainAuthToken.as_view()),
    path('summernote/', include('django_summernote.urls')),
    url(r'^.*/$', TemplateView.as_view(template_name="index.html"), name="home"),
    url(r'^$', TemplateView.as_view(template_name="index.html"), name="home"),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
