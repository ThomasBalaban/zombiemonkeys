# Generated by Django 3.0.1 on 2020-01-19 20:21

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('videos', '0020_video_promoted'),
    ]

    operations = [
        migrations.AlterField(
            model_name='video',
            name='promoted',
            field=models.IntegerField(choices=[(0, 'Nonpromo'), (1, 'Promo'), (2, 'Bigpromo'), (3, 'Hugepromo')], default=0),
        ),
    ]
