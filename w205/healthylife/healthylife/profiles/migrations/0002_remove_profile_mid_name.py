# -*- coding: utf-8 -*-
# Generated by Django 1.11.3 on 2017-07-17 20:56
from __future__ import unicode_literals

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('profiles', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='profile',
            name='mid_name',
        ),
    ]
