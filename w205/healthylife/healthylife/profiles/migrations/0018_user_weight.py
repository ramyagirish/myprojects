# -*- coding: utf-8 -*-
# Generated by Django 1.11.3 on 2017-08-09 21:35
from __future__ import unicode_literals

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('profiles', '0017_user_diet_user_id'),
    ]

    operations = [
        migrations.CreateModel(
            name='user_weight',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('user_name', models.CharField(max_length=100)),
                ('user_id', models.IntegerField(blank=True, default=None, null=True)),
                ('pub_date', models.DateField(default=datetime.date(2017, 8, 9))),
                ('entry_date', models.DateField(default=datetime.date(2017, 8, 9))),
                ('weight', models.DecimalField(decimal_places=2, max_digits=5)),
            ],
        ),
    ]
