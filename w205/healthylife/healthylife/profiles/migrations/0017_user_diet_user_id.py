# -*- coding: utf-8 -*-
# Generated by Django 1.11.3 on 2017-08-09 21:14
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('profiles', '0016_auto_20170809_2013'),
    ]

    operations = [
        migrations.AddField(
            model_name='user_diet',
            name='user_id',
            field=models.IntegerField(blank=True, default=None, null=True),
        ),
    ]
