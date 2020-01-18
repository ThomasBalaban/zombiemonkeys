from django.contrib import admin
from .models import Article
from django_summernote.admin import SummernoteModelAdmin

# Register your models here.
class ArticleAdmin(SummernoteModelAdmin):
    fields = ['user', 'article_title', 'article_summery', 'article_text', 'article_poster', 'article_header', 'created_date']
    summernote_fields = ('article_text',)
    list_display = ['article_title', 'article_summery', 'article_posterImg', 'user']
    search_fields = ['article_title', 'article_text', 'user']
    list_filter = ['user', 'created_date']

admin.site.register(Article, ArticleAdmin)