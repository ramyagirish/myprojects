from django.db import models
import datetime
from django import forms

# Create your models here.
class Profile(models.Model):
	user_name = models.CharField(max_length=100,unique=True)
	first_name = models.CharField(max_length=50)
	last_name = models.CharField(max_length=50)
	DOB = models.DateField(default=datetime.date.today())
	gender = models.CharField(max_length=1,choices=(('M','Male'),('F','Female')),default='M')
	created_date = models.DateTimeField()
	email_id = models.EmailField(max_length=100)
	height = models.DecimalField(max_digits=5,decimal_places=2)
	img = models.ImageField(upload_to='media',null=True,blank=True,default="media/no_img.jpg")

	def __str__(self):
		return self.user_name

class Foodfacts(models.Model):
	nbd_no = models.CharField(max_length=6,primary_key = True)
	shrt_desc = models.CharField(max_length= 500)
	water_g = models.DecimalField(max_digits=9,decimal_places=3,default=None,null=True,blank=True)
	energy_kcal = models.DecimalField(max_digits=9,decimal_places=3,default=None,null=True,blank=True)
	protein_g = models.DecimalField(max_digits=9,decimal_places=3,default=None,null=True,blank=True)
	lipid_tot_g = models.DecimalField(max_digits=9,decimal_places=3,default=None,null=True,blank=True)
	ash_g = models.DecimalField(max_digits=9,decimal_places=3,default=None,null=True,blank=True)
	carbohydrate_g = models.DecimalField(max_digits=9,decimal_places=3,default=None,null=True,blank=True)
	fiber_td_g = models.DecimalField(max_digits=9,decimal_places=3,default=None,null=True,blank=True)
	sugar_tot_g = models.DecimalField(max_digits=9,decimal_places=3,default=None,null=True,blank=True)
	calcium_mg = models.DecimalField(max_digits=9,decimal_places=3,default=None,null=True,blank=True)
	iron_mg = models.DecimalField(max_digits=9,decimal_places=3,default=None,null=True,blank=True)
	magnesium_mg = models.DecimalField(max_digits=9,decimal_places=3,default=None,null=True,blank=True)
	phosphorus_mg = models.DecimalField(max_digits=9,decimal_places=3,default=None,null=True,blank=True)
	potassium_mg = models.DecimalField(max_digits=9,decimal_places=3,default=None,null=True,blank=True)
	sodium_mg = models.DecimalField(max_digits=9,decimal_places=3,default=None,null=True,blank=True)
	zinc_mg = models.DecimalField(max_digits=9,decimal_places=3,default=None,null=True,blank=True)
	copper_mg = models.DecimalField(max_digits=9,decimal_places=3,default=None,null=True,blank=True)
	manganese_mg = models.DecimalField(max_digits=9,decimal_places=3,default=None,null=True,blank=True)
	selenium_ug = models.DecimalField(max_digits=9,decimal_places=3,default=None,null=True,blank=True)
	vit_c_mg = models.DecimalField(max_digits=9,decimal_places=3,default=None,null=True,blank=True)
	thiamin_mg = models.DecimalField(max_digits=9,decimal_places=3,default=None,null=True,blank=True)
	riboflavin_mg = models.DecimalField(max_digits=9,decimal_places=3,default=None,null=True,blank=True)
	niacin_mg = models.DecimalField(max_digits=9,decimal_places=3,default=None,null=True,blank=True)
	panto_acid_mg = models.DecimalField(max_digits=9,decimal_places=3,default=None,null=True,blank=True)
	vit_b6_mg = models.DecimalField(max_digits=9,decimal_places=3,default=None,null=True,blank=True)
	folate_tot_ug = models.DecimalField(max_digits=9,decimal_places=3,default=None,null=True,blank=True)
	folic_acid_ug = models.DecimalField(max_digits=9,decimal_places=3,default=None,null=True,blank=True)
	food_folate_ug = models.DecimalField(max_digits=9,decimal_places=3,default=None,null=True,blank=True)
	folate_DFE_ug = models.DecimalField(max_digits=9,decimal_places=3,default=None,null=True,blank=True)
	choline_tot_mg = models.DecimalField(max_digits=9,decimal_places=3,default=None,null=True,blank=True)
	vit_b12_ug = models.DecimalField(max_digits=9,decimal_places=3,default=None,null=True,blank=True)
	vit_a_iu = models.DecimalField(max_digits=9,decimal_places=3,default=None,null=True,blank=True)
	vit_a_rae = models.DecimalField(max_digits=9,decimal_places=3,default=None,null=True,blank=True)
	retinol_ug = models.DecimalField(max_digits=9,decimal_places=3,default=None,null=True,blank=True)
	alpha_carot_ug = models.DecimalField(max_digits=9,decimal_places=3,default=None,null=True,blank=True)
	beta_carot_ug = models.DecimalField(max_digits=9,decimal_places=3,default=None,null=True,blank=True)
	beta_crypt_ug = models.DecimalField(max_digits=9,decimal_places=3,default=None,null=True,blank=True)
	lycopene_ug = models.DecimalField(max_digits=9,decimal_places=3,default=None,null=True,blank=True)
	lut_zea_ug = models.DecimalField(max_digits=9,decimal_places=3,default=None,null=True,blank=True)
	vit_e_mg = models.DecimalField(max_digits=9,decimal_places=3,default=None,null=True,blank=True)
	vit_d_ug = models.DecimalField(max_digits=9,decimal_places=3,default=None,null=True,blank=True)
	vit_d_iu = models.DecimalField(max_digits=9,decimal_places=3,default=None,null=True,blank=True)
	vit_k_ug = models.DecimalField(max_digits=9,decimal_places=3,default=None,null=True,blank=True)
	fat_sat_g = models.DecimalField(max_digits=9,decimal_places=3,default=None,null=True,blank=True)
	fat_mono_g = models.DecimalField(max_digits=9,decimal_places=3,default=None,null=True,blank=True)
	fat_poly_g = models.DecimalField(max_digits=9,decimal_places=3,default=None,null=True,blank=True)
	cholestrol_mg = models.DecimalField(max_digits=9,decimal_places=3,default=None,null=True,blank=True)
	gm_wt_1 = models.DecimalField(max_digits=9,decimal_places=3,default=None,null=True,blank=True)
	gm_wt_desc1 = models.CharField(max_length= 100,default=None,null=True,blank=True)
	gm_wt_2 = models.DecimalField(max_digits=9,decimal_places=3,default=None,null=True,blank=True)
	gm_wt_desc2 = models.CharField(max_length= 100,default=None,null=True,blank=True)
	refuse_pct = models.IntegerField(default=None,null=True,blank=True)




class user_diet(models.Model):
	user_name = models.CharField(max_length=100)
	user_id = models.IntegerField(default=None,null=True,blank=True)
	pub_date =  models.DateField(default=datetime.date.today())
	entry_date = models.DateField(default=datetime.date.today())
	serve_size = models.DecimalField(max_digits=5,decimal_places=2,default=None,null=True,blank=True)
	nbd_fooditem = models.CharField(max_length=6,default=None,null=True,blank=True)
	mealtype = models.CharField(max_length=1,choices=(('B','Breakfast'),('L','Lunch'),('D','Dinner')),default='B')


class user_weight(models.Model):
	user_name = models.CharField(max_length=100)
	user_id = models.IntegerField(default=None,null=True,blank=True)
	pub_date =  models.DateField(default=datetime.date.today())
	entry_date = models.DateField(default=datetime.date.today())
	weight = models.DecimalField(max_digits=5,decimal_places=2)