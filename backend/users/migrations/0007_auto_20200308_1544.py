# Generated by Django 3.0.1 on 2020-03-08 19:44

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0006_userprofile_user_real_name'),
    ]

    operations = [
        migrations.AlterField(
            model_name='userprofile',
            name='user_real_name',
            field=models.CharField(blank=True, max_length=255),
        ),
    ]
