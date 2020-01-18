# Generated by Django 3.0.1 on 2020-01-18 22:24

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion
import django.utils.timezone


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Podcasts',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('podcast_title', models.CharField(max_length=255)),
                ('podcast_summery', models.CharField(blank=True, max_length=400)),
                ('podcast', models.FileField(null=True, upload_to='podcast/')),
                ('created_date', models.DateTimeField(default=django.utils.timezone.now)),
                ('revised_date', models.DateTimeField(auto_now=True)),
                ('user', models.ForeignKey(default=1, on_delete=django.db.models.deletion.SET_DEFAULT, to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]
