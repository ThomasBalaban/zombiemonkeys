from django.contrib import admin
from .models import Article

# Register your models here.
@admin.register(Article)
class ArticleAdmin(admin.ModelAdmin):
    fields = ['user', 'article_title', 'article_summery', 'article_text', 'article_poster', 'article_header', 'created_date']
    list_display = ['article_title', 'article_summery', 'article_posterImg', 'user']
    search_fields = ['article_title', 'article_text', 'user']
    list_filter = ['user', 'created_date']