from .models import Article
from rest_framework import viewsets
from .serializers import ArticleSerializer
from rest_framework.authentication import TokenAuthentication
from rest_framework.permissions import IsAuthenticated, AllowAny

# Create your views here.
class ArticleViewSet(viewsets.ModelViewSet):
    serializer_class = ArticleSerializer
    queryset = Article.objects.all()
    authentication_classes = (TokenAuthentication,)
    permission_classes = (AllowAny,)