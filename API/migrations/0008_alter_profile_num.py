# Generated by Django 4.2.5 on 2023-09-30 14:44

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('API', '0007_alter_profile_password'),
    ]

    operations = [
        migrations.AlterField(
            model_name='profile',
            name='num',
            field=models.IntegerField(),
        ),
    ]