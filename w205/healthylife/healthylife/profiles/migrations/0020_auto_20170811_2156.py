# -*- coding: utf-8 -*-
# Generated by Django 1.11.3 on 2017-08-11 21:56
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('profiles', '0019_auto_20170811_2015'),
    ]

    operations = [
        migrations.AlterField(
            model_name='profile',
            name='img',
            field=models.ImageField(blank=True, default='media/no_img.jpg', null=True, upload_to='media'),
        ),
    ]
