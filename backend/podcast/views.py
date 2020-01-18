from .models import Podcast
from rest_framework import viewsets
from .serializers import PodcastSerializer
from rest_framework.authentication import TokenAuthentication
from rest_framework.permissions import IsAuthenticated, AllowAny

# Create your views here.
class PodcastViewSet(viewsets.ModelViewSet):
    serializer_class = PodcastSerializer
    queryset = Podcast.objects.all()
    authentication_classes = (TokenAuthentication,)
    permission_classes = (AllowAny,)