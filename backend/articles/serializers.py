from rest_framework import serializers
from .models import Article

class ArticleSerializer(serializers.ModelSerializer):
    class Meta:
        model = Article
        fields = ['user', 'article_title', 'article_summery', 'article_text', 'article_poster', 'article_header', 'article_poster', 'article_header', 'created_date', 'revised_date']