from .models import Video, Comment
from rest_framework import viewsets
from .serializers import VideoSerializer, VideoCommentSerializer
from rest_framework.authentication import TokenAuthentication
from rest_framework.permissions import IsAuthenticated, AllowAny

class VideoViewSet(viewsets.ModelViewSet):
    serializer_class = VideoSerializer
    queryset = Video.objects.all()
    authentication_classes = (TokenAuthentication,)
    permission_classes = (AllowAny,)