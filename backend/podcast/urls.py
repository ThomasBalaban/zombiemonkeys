from django.urls import path, include
from .views import PodcastViewSet
from rest_framework import routers

router = routers.DefaultRouter()
router.register('', PodcastViewSet)

urlpatterns = [
    path('', include(router.urls))
]
