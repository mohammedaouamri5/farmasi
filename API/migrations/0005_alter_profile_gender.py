# Generated by Django 4.2.5 on 2023-09-19 10:24

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('API', '0004_alter_profile_gender'),
    ]

    operations = [
        migrations.AlterField(
            model_name='profile',
            name='gender',
            field=models.CharField(default='female', max_length=6),
        ),
    ]
