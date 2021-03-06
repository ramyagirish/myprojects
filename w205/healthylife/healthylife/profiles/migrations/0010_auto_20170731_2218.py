# -*- coding: utf-8 -*-
# Generated by Django 1.11.3 on 2017-07-31 22:18
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('profiles', '0009_auto_20170731_2202'),
    ]

    operations = [
        migrations.AlterField(
            model_name='foodfacts',
            name='alpha_carot_ug',
            field=models.DecimalField(blank=True, decimal_places=3, default=None, max_digits=7, null=True),
        ),
        migrations.AlterField(
            model_name='foodfacts',
            name='ash_g',
            field=models.DecimalField(blank=True, decimal_places=3, default=None, max_digits=7, null=True),
        ),
        migrations.AlterField(
            model_name='foodfacts',
            name='beta_carot_ug',
            field=models.DecimalField(blank=True, decimal_places=3, default=None, max_digits=7, null=True),
        ),
        migrations.AlterField(
            model_name='foodfacts',
            name='beta_crypt_ug',
            field=models.DecimalField(blank=True, decimal_places=3, default=None, max_digits=7, null=True),
        ),
        migrations.AlterField(
            model_name='foodfacts',
            name='calcium_mg',
            field=models.DecimalField(blank=True, decimal_places=3, default=None, max_digits=7, null=True),
        ),
        migrations.AlterField(
            model_name='foodfacts',
            name='carbohydrate_g',
            field=models.DecimalField(blank=True, decimal_places=3, default=None, max_digits=7, null=True),
        ),
        migrations.AlterField(
            model_name='foodfacts',
            name='cholestrol_mg',
            field=models.DecimalField(blank=True, decimal_places=3, default=None, max_digits=7, null=True),
        ),
        migrations.AlterField(
            model_name='foodfacts',
            name='choline_tot_mg',
            field=models.DecimalField(blank=True, decimal_places=3, default=None, max_digits=7, null=True),
        ),
        migrations.AlterField(
            model_name='foodfacts',
            name='copper_mg',
            field=models.DecimalField(blank=True, decimal_places=3, default=None, max_digits=7, null=True),
        ),
        migrations.AlterField(
            model_name='foodfacts',
            name='energy_kcal',
            field=models.DecimalField(blank=True, decimal_places=3, default=None, max_digits=7, null=True),
        ),
        migrations.AlterField(
            model_name='foodfacts',
            name='fat_mono_g',
            field=models.DecimalField(blank=True, decimal_places=3, default=None, max_digits=7, null=True),
        ),
        migrations.AlterField(
            model_name='foodfacts',
            name='fat_poly_g',
            field=models.DecimalField(blank=True, decimal_places=3, default=None, max_digits=7, null=True),
        ),
        migrations.AlterField(
            model_name='foodfacts',
            name='fat_sat_g',
            field=models.DecimalField(blank=True, decimal_places=3, default=None, max_digits=7, null=True),
        ),
        migrations.AlterField(
            model_name='foodfacts',
            name='fiber_td_g',
            field=models.DecimalField(blank=True, decimal_places=3, default=None, max_digits=7, null=True),
        ),
        migrations.AlterField(
            model_name='foodfacts',
            name='folate_DFE_ug',
            field=models.DecimalField(blank=True, decimal_places=3, default=None, max_digits=7, null=True),
        ),
        migrations.AlterField(
            model_name='foodfacts',
            name='folate_tot_ug',
            field=models.DecimalField(blank=True, decimal_places=3, default=None, max_digits=7, null=True),
        ),
        migrations.AlterField(
            model_name='foodfacts',
            name='folic_acid_ug',
            field=models.DecimalField(blank=True, decimal_places=3, default=None, max_digits=7, null=True),
        ),
        migrations.AlterField(
            model_name='foodfacts',
            name='food_folate_ug',
            field=models.DecimalField(blank=True, decimal_places=3, default=None, max_digits=7, null=True),
        ),
        migrations.AlterField(
            model_name='foodfacts',
            name='gm_wt_1',
            field=models.DecimalField(blank=True, decimal_places=3, default=None, max_digits=7, null=True),
        ),
        migrations.AlterField(
            model_name='foodfacts',
            name='gm_wt_2',
            field=models.DecimalField(blank=True, decimal_places=3, default=None, max_digits=7, null=True),
        ),
        migrations.AlterField(
            model_name='foodfacts',
            name='gm_wt_desc1',
            field=models.CharField(blank=True, default=None, max_length=100, null=True),
        ),
        migrations.AlterField(
            model_name='foodfacts',
            name='gm_wt_desc2',
            field=models.CharField(blank=True, default=None, max_length=100, null=True),
        ),
        migrations.AlterField(
            model_name='foodfacts',
            name='iron_mg',
            field=models.DecimalField(blank=True, decimal_places=3, default=None, max_digits=7, null=True),
        ),
        migrations.AlterField(
            model_name='foodfacts',
            name='lipid_tot_g',
            field=models.DecimalField(blank=True, decimal_places=3, default=None, max_digits=7, null=True),
        ),
        migrations.AlterField(
            model_name='foodfacts',
            name='lut_zea_ug',
            field=models.DecimalField(blank=True, decimal_places=3, default=None, max_digits=7, null=True),
        ),
        migrations.AlterField(
            model_name='foodfacts',
            name='lycopene_ug',
            field=models.DecimalField(blank=True, decimal_places=3, default=None, max_digits=7, null=True),
        ),
        migrations.AlterField(
            model_name='foodfacts',
            name='magnesium_mg',
            field=models.DecimalField(blank=True, decimal_places=3, default=None, max_digits=7, null=True),
        ),
        migrations.AlterField(
            model_name='foodfacts',
            name='manganese_mg',
            field=models.DecimalField(blank=True, decimal_places=3, default=None, max_digits=7, null=True),
        ),
        migrations.AlterField(
            model_name='foodfacts',
            name='niacin_mg',
            field=models.DecimalField(blank=True, decimal_places=3, default=None, max_digits=7, null=True),
        ),
        migrations.AlterField(
            model_name='foodfacts',
            name='panto_acid_mg',
            field=models.DecimalField(blank=True, decimal_places=3, default=None, max_digits=7, null=True),
        ),
        migrations.AlterField(
            model_name='foodfacts',
            name='phosphorus_mg',
            field=models.DecimalField(blank=True, decimal_places=3, default=None, max_digits=7, null=True),
        ),
        migrations.AlterField(
            model_name='foodfacts',
            name='potassium_mg',
            field=models.DecimalField(blank=True, decimal_places=3, default=None, max_digits=7, null=True),
        ),
        migrations.AlterField(
            model_name='foodfacts',
            name='protein_g',
            field=models.DecimalField(blank=True, decimal_places=3, default=None, max_digits=7, null=True),
        ),
        migrations.AlterField(
            model_name='foodfacts',
            name='refuse_pct',
            field=models.IntegerField(blank=True, default=None, null=True),
        ),
        migrations.AlterField(
            model_name='foodfacts',
            name='retinol_ug',
            field=models.DecimalField(blank=True, decimal_places=3, default=None, max_digits=7, null=True),
        ),
        migrations.AlterField(
            model_name='foodfacts',
            name='riboflavin_mg',
            field=models.DecimalField(blank=True, decimal_places=3, default=None, max_digits=7, null=True),
        ),
        migrations.AlterField(
            model_name='foodfacts',
            name='selenium_ug',
            field=models.DecimalField(blank=True, decimal_places=3, default=None, max_digits=7, null=True),
        ),
        migrations.AlterField(
            model_name='foodfacts',
            name='sodium_mg',
            field=models.DecimalField(blank=True, decimal_places=3, default=None, max_digits=7, null=True),
        ),
        migrations.AlterField(
            model_name='foodfacts',
            name='sugar_tot_g',
            field=models.DecimalField(blank=True, decimal_places=3, default=None, max_digits=7, null=True),
        ),
        migrations.AlterField(
            model_name='foodfacts',
            name='thiamin_mg',
            field=models.DecimalField(blank=True, decimal_places=3, default=None, max_digits=7, null=True),
        ),
        migrations.AlterField(
            model_name='foodfacts',
            name='vit_a_iu',
            field=models.DecimalField(blank=True, decimal_places=3, default=None, max_digits=7, null=True),
        ),
        migrations.AlterField(
            model_name='foodfacts',
            name='vit_a_rae',
            field=models.DecimalField(blank=True, decimal_places=3, default=None, max_digits=7, null=True),
        ),
        migrations.AlterField(
            model_name='foodfacts',
            name='vit_b12_ug',
            field=models.DecimalField(blank=True, decimal_places=3, default=None, max_digits=7, null=True),
        ),
        migrations.AlterField(
            model_name='foodfacts',
            name='vit_b6_mg',
            field=models.DecimalField(blank=True, decimal_places=3, default=None, max_digits=7, null=True),
        ),
        migrations.AlterField(
            model_name='foodfacts',
            name='vit_c_mg',
            field=models.DecimalField(blank=True, decimal_places=3, default=None, max_digits=7, null=True),
        ),
        migrations.AlterField(
            model_name='foodfacts',
            name='vit_d_iu',
            field=models.DecimalField(blank=True, decimal_places=3, default=None, max_digits=7, null=True),
        ),
        migrations.AlterField(
            model_name='foodfacts',
            name='vit_d_ug',
            field=models.DecimalField(blank=True, decimal_places=3, default=None, max_digits=7, null=True),
        ),
        migrations.AlterField(
            model_name='foodfacts',
            name='vit_e_mg',
            field=models.DecimalField(blank=True, decimal_places=3, default=None, max_digits=7, null=True),
        ),
        migrations.AlterField(
            model_name='foodfacts',
            name='vit_k_ug',
            field=models.DecimalField(blank=True, decimal_places=3, default=None, max_digits=7, null=True),
        ),
        migrations.AlterField(
            model_name='foodfacts',
            name='water_g',
            field=models.DecimalField(blank=True, decimal_places=3, default=None, max_digits=7, null=True),
        ),
        migrations.AlterField(
            model_name='foodfacts',
            name='zinc_mg',
            field=models.DecimalField(blank=True, decimal_places=3, default=None, max_digits=7, null=True),
        ),
    ]
