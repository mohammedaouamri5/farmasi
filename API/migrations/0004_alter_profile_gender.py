# Generated by Django 4.2.5 on 2023-09-18 17:25

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('API', '0003_profile_age'),
    ]

    operations = [
        migrations.AlterField(
            model_name='profile',
            name='gender',
            field=models.CharField(default='femalejjjjjjjjjjjjjjjjj', max_length=6),
        ),
    ]
