from django.urls import path, include
from .views import CreateUserViewSet
from rest_framework import routers

router = routers.DefaultRouter()
router.register('', CreateUserViewSet)

urlpatterns = [
    path('', include(router.urls))
]
