# Generated by Django 3.0.1 on 2020-01-18 22:24

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('articles', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='article',
            name='revised_date',
            field=models.DateTimeField(auto_now=True),
        ),
    ]
