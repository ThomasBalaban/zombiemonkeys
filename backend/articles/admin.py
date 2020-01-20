from django.contrib import admin
from .models import Article, Comment, Tag
from django_summernote.admin import SummernoteModelAdmin

class Comments(admin.TabularInline):
    model = Comment
    extra = 1

class Tags(admin.TabularInline):
    model = Tag
    extra = 1

@admin.register(Comment)
class CommentAdmin(admin.ModelAdmin):
    fields = ['post', 'user', 'text', 'created_date']
    list_display = ['post', 'user', 'text', 'created_date']

@admin.register(Tag)
class TagAdmin(admin.ModelAdmin):
    fields = ['post', 'user', 'tag', 'created_date']
    list_display = ['post', 'user', 'tag', 'created_date']

class ArticleAdmin(SummernoteModelAdmin):
    fields = ['user', 'article_title', 'article_summery', 'article_text', 'article_poster', 'article_header', 'promoted', 'created_date']
    summernote_fields = ('article_text',)
    list_display = ['article_title', 'article_summery', 'article_posterImg', 'user']
    search_fields = ['article_title', 'article_text', 'user']
    list_filter = ['user', 'created_date']
    inlines = [ Tags, Comments ]

admin.site.register(Article, ArticleAdmin)