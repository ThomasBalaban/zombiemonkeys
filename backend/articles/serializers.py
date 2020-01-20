from rest_framework import serializers
from .models import Article, Comment, Tag

class ArticleCommentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Comment
        fields = ['post', 'user', 'text', 'created_date']

class ArticleTagSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tag
        fields = ['post', 'user', 'tag', 'created_date']

class ArticleSerializer(serializers.ModelSerializer):
    comments = ArticleCommentSerializer(many=True)
    tags = ArticleTagSerializer(many=True)

    class Meta:
        model = Article
        fields = ['user', 'article_title', 'article_summery', 'article_text', 'article_poster', 'article_header', 'article_poster', 'article_header', 'created_date', 'revised_date', 'comments', 'tags']