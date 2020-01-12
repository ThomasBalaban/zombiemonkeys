# Generated by Django 3.0.1 on 2020-01-11 21:14

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('videos', '0012_moviecharacter'),
    ]

    operations = [
        migrations.AlterField(
            model_name='moviecharacter',
            name='movie',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='character', to='videos.Video'),
        ),
        migrations.CreateModel(
            name='Auther',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('fname', models.CharField(max_length=30)),
                ('lname', models.CharField(max_length=30)),
                ('videos', models.ManyToManyField(to='videos.Video')),
            ],
        ),
    ]
