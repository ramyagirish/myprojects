from django.shortcuts import render, get_object_or_404
from .models import Profile
from django.contrib.auth.models import User
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.models import User
from django.contrib.auth.decorators import login_required
from django.utils import timezone
import datetime
from . import models
from django.db import connection
import math
import numpy
import matplotlib
matplotlib.use('pdf')
import matplotlib.pyplot as plt
from django.conf import settings 

# Create your views here.

plt.rcParams['font.size'] = 10.
plt.rcParams['font.family'] = 'Comic Sans MS'
plt.rcParams['axes.labelsize'] = 15.
plt.rcParams['xtick.labelsize'] = 10
plt.rcParams['ytick.labelsize'] = 10
plt.rcParams['figure.figsize'] = 20, 20

def home(request):
	return render(request,'profiles/home.html')

def profile_details(request,user_id):
	profile = get_object_or_404(Profile,pk=user_id)
	return render(request,'profiles/profile_details.html',{'profile':profile})

def signup(request):
	if request.method == "POST":
		if request.POST['pwd1'] == request.POST['pwd2']:
			try:
				user = User.objects.get(username=request.POST['username'])
				return render(request,'profiles/signup.html',{'error1':'user with user name ' + user.username + ' already exists'})
			except User.DoesNotExist:
				user = User.objects.create_user(request.POST['username'], password=request.POST['pwd1'])
				login(request, user)
				return render(request,'profiles/create_profile.html')
		else:
			return render(request,'profiles/signup.html',{'error':'Passwords didn\'t match'})
	else:
		return render(request,'profiles/signup.html')

def login1(request):
	if request.method == "POST":
		user = authenticate(request, username = request.POST['username'], password = request.POST['pwd'])
		if user is not None:
			login(request, user)
			if 'next' in request.POST:
				return redirect(request.POST['next'])
			profile = models.Profile.objects.get(user_name=user.username)
			return render(request,'profiles/profile_details.html',{'profile':profile})
		else:
			return render(request,'profiles/login.html',{'error':'The username and password didn\'t match'})	
	else:
		return render(request,'profiles/login.html')


@login_required
def create(request):
	if request.method == "POST":
		if request.POST['first_name'] and request.POST['last_name'] and request.POST['email_id'] and request.POST['DOB'] and request.POST['gender'] and  request.POST['height']:
			profile = models.Profile()
			profile.first_name= request.POST['first_name']
			profile.last_name= request.POST['last_name']
			profile.email_id= request.POST['email_id']
			profile.DOB = request.POST['DOB']
			profile.gender = request.POST['gender']
			profile.height = request.POST['height']
			profile.created_date = timezone.datetime.now()
			profile.user_name = request.user
			profile.save()
			return render(request,'profiles/profile_details.html',{'profile':profile})
		else:
			return render(request, 'profiles/create_profile.html',{'error':'Some field missing missing'})
	else:
		return render(request, 'profiles/create_profile.html')


def logout_view(request):
    logout(request)
    return render(request, 'profiles/home.html',{'success':'User has successfully logged out'})

@login_required
def index(request):
	if request.user.is_authenticated:
		profile = models.Profile.objects.get(user_name=request.user.username)
	return render(request, 'profiles/index.html',{'profile':profile})

@login_required
def searchtool(request):
	
	if request.user.is_authenticated:
			profile = models.Profile.objects.get(user_name=request.user.username)

	if request.method == "POST":
		if request.POST['currency'] and request.POST['bk_size1']:
			food = request.POST['currency']
			food_items = models.Foodfacts.objects.get(shrt_desc=food)
			diet = models.user_diet()
			diet.user_name = profile.user_name
			diet.user_id = profile.id
			if food_items is None:
				diet.nbd_fooditem = None
			else:
				diet.nbd_fooditem = food_items.nbd_no
			if request.POST['bk_size1'] is None:
				diet.serve_size = 0
			else:
				diet.serve_size = request.POST['bk_size1']
			diet.pub_date = datetime.date.today()
			diet.entry_date = request.POST['entry_date']
			diet.mealtype = request.POST['mealtype']
			diet.save()
		else:
			return render(request,'profiles/profile_details.html', {'profile':profile})
		
		
		if request.POST['currency1'] and request.POST['bk_size2']:
			food = request.POST['currency1']
			food_items = models.Foodfacts.objects.get(shrt_desc=food)
			diet = models.user_diet()
			diet.user_name = profile.user_name
			diet.user_id = profile.id
			if food_items is None:
				diet.nbd_fooditem = None
			else:
				diet.nbd_fooditem = food_items.nbd_no
			if request.POST['bk_size2'] is None:
				diet.serve_size = 0
			else:
				diet.serve_size = request.POST['bk_size2']
			diet.pub_date = datetime.date.today()
			diet.entry_date = request.POST['entry_date']
			diet.mealtype = request.POST['mealtype']
			diet.save()
		else:
			cur = connection.cursor()    
			cur.execute("SELECT u.entry_date,sum(d.energy_kcal) as total_kcal FROM profiles_Foodfacts as d INNER JOIN profiles_user_diet as u ON d.nbd_no = u.nbd_fooditem WHERE u.user_name = %s group by u.entry_date order by u.entry_date desc limit 30", [profile.user_name])                          	
			diet_user_kcal = list(cur)  	
			x = []
			y = []
			for i in range(1,len(diet_user_kcal)+1):
				x.append(str(diet_user_kcal[i-1][0]))
				y.append(float(diet_user_kcal[i-1][1]))
			plt.figure(0)
			ax = plt.axes()
			ax.set_xticks(numpy.arange(0,len(x),1))
			ax.set_yticks(numpy.arange(0,(math.ceil(max(y)/min(y))+1)*math.ceil(min(y)),max((math.ceil(max(y)/10.0)+1),math.ceil(min(y)))))
			ax.set_xticklabels(x,rotation=90)
			plt.bar(numpy.arange(0,len(x),1),y,0.65, color='b')
			plt.title('Distribution of Calories count')
			plt.xlabel('entry date')
			plt.ylabel('Total Calories')
			plt.savefig(settings.BASE_DIR+'/media/plot_'+profile.user_name+'_cal.png')
			# cur = connection.cursor()    
			cur.execute("SELECT u.entry_date,sum(d.protein_g) as total_protein FROM profiles_Foodfacts as d INNER JOIN profiles_user_diet as u ON d.nbd_no = u.nbd_fooditem WHERE u.user_name = %s group by u.entry_date order by u.entry_date desc limit 30", [profile.user_name])                          	
			diet_user_protein = list(cur)
			a = []
			b = []
			for i in range(1,len(diet_user_protein)+1):
				a.append(str(diet_user_protein[i-1][0]))
				b.append(float(diet_user_protein[i-1][1]))
			plt.figure(1)
			ax1 = plt.axes()
			ax1.set_xticks(numpy.arange(0,len(a),1))
			ax1.set_yticks(numpy.arange(0,(math.ceil(max(b)/min(b))+1)*math.ceil(min(b)),max((math.ceil(max(b)/10.0)+1),math.ceil(min(b)))))
			ax1.set_xticklabels(a,rotation=90)
			plt.bar(numpy.arange(0,len(a),1),b,0.65, color='r')
			plt.title('Distribution of Protein Intake')
			plt.xlabel('entry date')
			plt.ylabel('Total Protein')
			plt.savefig(settings.BASE_DIR+'/media/plot_'+profile.user_name+'_prot.png')
			# cur = connection.cursor()    
			cur.execute("SELECT u.entry_date,sum(d.lipid_tot_g) as total_fat FROM profiles_Foodfacts as d INNER JOIN profiles_user_diet as u ON d.nbd_no = u.nbd_fooditem WHERE u.user_name = %s group by u.entry_date order by u.entry_date desc limit 30", [profile.user_name])                          	
			diet_user_fat = list(cur)
			w = []
			z = []
			for i in range(1,len(diet_user_fat)+1):
				w.append(str(diet_user_fat[i-1][0]))
				z.append(float(diet_user_fat[i-1][1]))
			plt.figure(2)
			ax2 = plt.axes()
			ax2.set_xticks(numpy.arange(0,len(w),1))
			ax2.set_yticks(numpy.arange(0,(math.ceil(max(z)/min(z))+1)*math.ceil(min(z)),max((math.ceil(max(z)/10.0)+1),math.ceil(min(z)))))
			ax2.set_xticklabels(w,rotation=90)
			plt.bar(numpy.arange(0,len(w),1),z,0.65, color='y')
			plt.title('Distribution of Fat Intake')
			plt.xlabel('entry date')
			plt.ylabel('Total Fat')
			plt.savefig(settings.BASE_DIR+'/media/plot_'+profile.user_name+'_lipid.png')
			return render(request,'profiles/profile_details.html', {'profile':profile})

		
		if request.POST['currency2'] and request.POST['bk_size3']:
			food = request.POST['currency2']
			food_items = models.Foodfacts.objects.get(shrt_desc=food)
			diet = models.user_diet()
			diet.user_id = profile.id
			diet.user_name = profile.user_name
			if food_items is None:
				diet.nbd_fooditem = None
			else:
				diet.nbd_fooditem = food_items.nbd_no
			if request.POST['bk_size3'] is None:
				diet.serve_size = 0
			else:
				diet.serve_size = request.POST['bk_size3']
			diet.pub_date = datetime.date.today()
			diet.entry_date = request.POST['entry_date']
			diet.mealtype = request.POST['mealtype']
			diet.save()
		else:
			cur = connection.cursor()    
			cur.execute("SELECT u.entry_date,sum(d.energy_kcal) as total_kcal FROM profiles_Foodfacts as d INNER JOIN profiles_user_diet as u ON d.nbd_no = u.nbd_fooditem WHERE u.user_name = %s group by u.entry_date order by u.entry_date desc limit 30", [profile.user_name])                          	
			diet_user_kcal = list(cur)  	
			x = []
			y = []
			for i in range(1,len(diet_user_kcal)+1):
				x.append(str(diet_user_kcal[i-1][0]))
				y.append(float(diet_user_kcal[i-1][1]))
			plt.figure(0)
			ax = plt.axes()
			ax.set_xticks(numpy.arange(0,len(x),1))
			ax.set_yticks(numpy.arange(0,(math.ceil(max(y)/min(y))+1)*math.ceil(min(y)),max((math.ceil(max(y)/10.0)+1),math.ceil(min(y)))))
			ax.set_xticklabels(x,rotation=90)
			plt.bar(numpy.arange(0,len(x),1),y,0.65, color='b')
			plt.title('Distribution of Calories count')
			plt.xlabel('entry date')
			plt.ylabel('Total Calories')
			plt.savefig(settings.BASE_DIR+'/media/plot_'+profile.user_name+'_cal.png')
			# cur = connection.cursor()    
			cur.execute("SELECT u.entry_date,sum(d.protein_g) as total_protein FROM profiles_Foodfacts as d INNER JOIN profiles_user_diet as u ON d.nbd_no = u.nbd_fooditem WHERE u.user_name = %s group by u.entry_date order by u.entry_date desc limit 30", [profile.user_name])                          	
			diet_user_protein = list(cur)
			a = []
			b = []
			for i in range(1,len(diet_user_protein)+1):
				a.append(str(diet_user_protein[i-1][0]))
				b.append(float(diet_user_protein[i-1][1]))
			plt.figure(1)
			ax1 = plt.axes()
			ax1.set_xticks(numpy.arange(0,len(a),1))
			ax1.set_yticks(numpy.arange(0,(math.ceil(max(b)/min(b))+1)*math.ceil(min(b)),max((math.ceil(max(b)/10.0)+1),math.ceil(min(b)))))
			ax1.set_xticklabels(a,rotation=90)
			plt.bar(numpy.arange(0,len(a),1),b,0.65, color='r')
			plt.title('Distribution of Protein Intake')
			plt.xlabel('entry date')
			plt.ylabel('Total Protein')
			plt.savefig(settings.BASE_DIR+'/media/plot_'+profile.user_name+'_prot.png')
			# cur = connection.cursor()    
			cur.execute("SELECT u.entry_date,sum(d.lipid_tot_g) as total_fat FROM profiles_Foodfacts as d INNER JOIN profiles_user_diet as u ON d.nbd_no = u.nbd_fooditem WHERE u.user_name = %s group by u.entry_date order by u.entry_date desc limit 30", [profile.user_name])                          	
			diet_user_fat = list(cur)
			w = []
			z = []
			for i in range(1,len(diet_user_fat)+1):
				w.append(str(diet_user_fat[i-1][0]))
				z.append(float(diet_user_fat[i-1][1]))
			plt.figure(2)
			ax2 = plt.axes()
			ax2.set_xticks(numpy.arange(0,len(w),1))
			ax2.set_yticks(numpy.arange(0,(math.ceil(max(z)/min(z))+1)*math.ceil(min(z)),max((math.ceil(max(z)/10.0)+1),math.ceil(min(z)))))
			ax2.set_xticklabels(w,rotation=90)
			plt.bar(numpy.arange(0,len(w),1),z,0.65, color='y')
			plt.title('Distribution of Fat Intake')
			plt.xlabel('entry date')
			plt.ylabel('Total Fat')
			plt.savefig(settings.BASE_DIR+'/media/plot_'+profile.user_name+'_lipid.png')
			return render(request,'profiles/profile_details.html', {'profile':profile})


		if request.POST['currency3'] and request.POST['bk_size4']:
			food = request.POST['currency3']
			food_items = models.Foodfacts.objects.get(shrt_desc=food)
			diet = models.user_diet()
			diet.user_id = profile.id
			diet.user_name = profile.user_name
			if food_items is None:
				diet.nbd_fooditem = None
			else:
				diet.nbd_fooditem = food_items.nbd_no
			if request.POST['bk_size4'] is None:
				diet.serve_size = 0
			else:
				diet.serve_size = request.POST['bk_size4']
			diet.pub_date = datetime.date.today()
			diet.entry_date = request.POST['entry_date']
			diet.mealtype = request.POST['mealtype']
			diet.save()
			cur = connection.cursor()    
			cur.execute("SELECT u.entry_date,sum(d.energy_kcal) as total_kcal FROM profiles_Foodfacts as d INNER JOIN profiles_user_diet as u ON d.nbd_no = u.nbd_fooditem WHERE u.user_name = %s group by u.entry_date order by u.entry_date desc limit 30", [profile.user_name])                          	
			diet_user_kcal = list(cur)  	
			x = []
			y = []
			for i in range(1,len(diet_user_kcal)+1):
				x.append(str(diet_user_kcal[i-1][0]))
				y.append(float(diet_user_kcal[i-1][1]))
			plt.figure(0)
			ax = plt.axes()
			ax.set_xticks(numpy.arange(0,len(x),1))
			ax.set_yticks(numpy.arange(0,(math.ceil(max(y)/min(y))+1)*math.ceil(min(y)),max((math.ceil(max(y)/10.0)+1),math.ceil(min(y)))))
			ax.set_xticklabels(x,rotation=90)
			plt.bar(numpy.arange(0,len(x),1),y,0.65, color='b')
			plt.title('Distribution of Calories count')
			plt.xlabel('entry date')
			plt.ylabel('Total Calories')
			plt.savefig(settings.BASE_DIR+'/media/plot_'+profile.user_name+'_cal.png')
			# cur = connection.cursor()    
			cur.execute("SELECT u.entry_date,sum(d.protein_g) as total_protein FROM profiles_Foodfacts as d INNER JOIN profiles_user_diet as u ON d.nbd_no = u.nbd_fooditem WHERE u.user_name = %s group by u.entry_date order by u.entry_date desc limit 30", [profile.user_name])                          	
			diet_user_protein = list(cur)
			a = []
			b = []
			for i in range(1,len(diet_user_protein)+1):
				a.append(str(diet_user_protein[i-1][0]))
				b.append(float(diet_user_protein[i-1][1]))
			plt.figure(1)
			ax1 = plt.axes()
			ax1.set_xticks(numpy.arange(0,len(a),1))
			ax1.set_yticks(numpy.arange(0,(math.ceil(max(b)/min(b))+1)*math.ceil(min(b)),max((math.ceil(max(b)/10.0)+1),math.ceil(min(b)))))
			ax1.set_xticklabels(a,rotation=90)
			plt.bar(numpy.arange(0,len(a),1),b,0.65, color='r')
			plt.title('Distribution of Protein Intake')
			plt.xlabel('entry date')
			plt.ylabel('Total Protein')
			plt.savefig(settings.BASE_DIR+'/media/plot_'+profile.user_name+'_prot.png')
			# cur = connection.cursor()    
			cur.execute("SELECT u.entry_date,sum(d.lipid_tot_g) as total_fat FROM profiles_Foodfacts as d INNER JOIN profiles_user_diet as u ON d.nbd_no = u.nbd_fooditem WHERE u.user_name = %s group by u.entry_date order by u.entry_date desc limit 30", [profile.user_name])                          	
			diet_user_fat = list(cur)
			w = []
			z = []
			for i in range(1,len(diet_user_fat)+1):
				w.append(str(diet_user_fat[i-1][0]))
				z.append(float(diet_user_fat[i-1][1]))
			plt.figure(2)
			ax2 = plt.axes()
			ax2.set_xticks(numpy.arange(0,len(w),1))
			ax2.set_yticks(numpy.arange(0,(math.ceil(max(z)/min(z))+1)*math.ceil(min(z)),max((math.ceil(max(z)/10.0)+1),math.ceil(min(z)))))
			ax2.set_xticklabels(w,rotation=90)
			plt.bar(numpy.arange(0,len(w),1),z,0.65, color='y')
			plt.title('Distribution of Fat Intake')
			plt.xlabel('entry date')
			plt.ylabel('Total Fat')
			plt.savefig(settings.BASE_DIR+'/media/plot_'+profile.user_name+'_lipid.png')
		else:
			cur = connection.cursor()    
			cur.execute("SELECT u.entry_date,sum(d.energy_kcal) as total_kcal FROM profiles_Foodfacts as d INNER JOIN profiles_user_diet as u ON d.nbd_no = u.nbd_fooditem WHERE u.user_name = %s group by u.entry_date order by u.entry_date desc limit 30", [profile.user_name])                          	
			diet_user_kcal = list(cur)  	
			x = []
			y = []
			for i in range(1,len(diet_user_kcal)+1):
				x.append(str(diet_user_kcal[i-1][0]))
				y.append(float(diet_user_kcal[i-1][1]))
			plt.figure(0)
			ax = plt.axes()
			ax.set_xticks(numpy.arange(0,len(x),1))
			ax.set_yticks(numpy.arange(0,(math.ceil(max(y)/min(y))+1)*math.ceil(min(y)),max((math.ceil(max(y)/10.0)+1),math.ceil(min(y)))))
			ax.set_xticklabels(x,rotation=90)
			plt.bar(numpy.arange(0,len(x),1),y,0.65, color='b')
			plt.title('Distribution of Calories count')
			plt.xlabel('entry date')
			plt.ylabel('Total Calories')
			plt.savefig(settings.BASE_DIR+'/media/plot_'+profile.user_name+'_cal.png')
			# cur = connection.cursor()    
			cur.execute("SELECT u.entry_date,sum(d.protein_g) as total_protein FROM profiles_Foodfacts as d INNER JOIN profiles_user_diet as u ON d.nbd_no = u.nbd_fooditem WHERE u.user_name = %s group by u.entry_date order by u.entry_date desc limit 30", [profile.user_name])                          	
			diet_user_protein = list(cur)
			a = []
			b = []
			for i in range(1,len(diet_user_protein)+1):
				a.append(str(diet_user_protein[i-1][0]))
				b.append(float(diet_user_protein[i-1][1]))
			plt.figure(1)
			ax1 = plt.axes()
			ax1.set_xticks(numpy.arange(0,len(a),1))
			ax1.set_yticks(numpy.arange(0,(math.ceil(max(b)/min(b))+1)*math.ceil(min(b)),max((math.ceil(max(b)/10.0)+1),math.ceil(min(b)))))
			ax1.set_xticklabels(x,rotation=90)
			plt.bar(numpy.arange(0,len(a),1),b,0.65, color='r')
			plt.title('Distribution of Protein Intake')
			plt.xlabel('entry date')
			plt.ylabel('Total Protein')
			plt.savefig(settings.BASE_DIR+'/media/plot_'+profile.user_name+'_prot.png')
			# cur = connection.cursor()    
			cur.execute("SELECT u.entry_date,sum(d.lipid_tot_g) as total_fat FROM profiles_Foodfacts as d INNER JOIN profiles_user_diet as u ON d.nbd_no = u.nbd_fooditem WHERE u.user_name = %s group by u.entry_date order by u.entry_date desc limit 30", [profile.user_name])                          	
			diet_user_fat = list(cur)
			w = []
			z = []
			for i in range(1,len(diet_user_fat)+1):
				w.append(str(diet_user_fat[i-1][0]))
				z.append(float(diet_user_fat[i-1][1]))
			plt.figure(2)
			ax2 = plt.axes()
			ax2.set_xticks(numpy.arange(0,len(w),1))
			ax2.set_yticks(numpy.arange(0,(math.ceil(max(z)/min(z))+1)*math.ceil(min(z)),max((math.ceil(max(z)/10.0)+1),math.ceil(min(z)))))
			ax2.set_xticklabels(w,rotation=90)
			plt.bar(numpy.arange(0,len(w),1),z,0.65, color='y')
			plt.title('Distribution of Fat Intake')
			plt.xlabel('entry date')
			plt.ylabel('Total Fat')
			plt.savefig(settings.BASE_DIR+'/media/plot_'+profile.user_name+'_lipid.png')
			return render(request,'profiles/profile_details.html', {'profile':profile})

		return render(request,'profiles/profile_details.html', {'profile':profile})
	else:
		return render(request,'profiles/profile_details.html', {'profile':profile})


@login_required
def index1(request):
	if request.user.is_authenticated:
		profile = models.Profile.objects.get(user_name=request.user.username)
	return render(request, 'profiles/user_weight.html',{'profile':profile})

@login_required
def logged_in(request):
	if request.user.is_authenticated:
		profile = models.Profile.objects.get(user_name=request.user.username)
	return render(request, 'profiles/profile_details.html',{'profile':profile})

@login_required
def user_weight(request):
	
	if request.user.is_authenticated:
			profile = models.Profile.objects.get(user_name=request.user.username)

	if request.method == "POST":
		if request.POST['weight']:	
			user_wt = models.user_weight()
			user_wt.user_id = profile.id
			user_wt.user_name = profile.user_name
			user_wt.pub_date = datetime.date.today()
			user_wt.entry_date = request.POST['entry_date']
			if request.POST['weight'] is None:
				user_wt.weight = 0
			else:
				user_wt.weight = request.POST['weight']
			user_wt.save()
			cur = connection.cursor()    
			cur.execute("SELECT entry_date, weight FROM profiles_user_weight WHERE user_name = %s ORDER BY entry_date DESC LIMIT 30", [profile.user_name])                          	
			diet_user_weight = list(cur)  	
			x = []
			y = []
			h = float(profile.height) *float(profile.height)
			for i in range(1,len(diet_user_weight)+1):
				x.append(str(diet_user_weight[i-1][0]))
				y.append(float(diet_user_weight[i-1][1]))
				y[i-1] = y[i-1] * (4540/h)
			plt.figure(4)
			ax3 = plt.axes()
			ax3.set_xticks(numpy.arange(0,len(x),1))
			ax3.set_xticklabels(x,rotation=90)
			plt.bar(numpy.arange(0,len(x),1),y,0.65, color='gray')
			plt.title('Distribution of BMI')
			plt.xlabel('entry date')
			plt.ylabel('BMI')
			plt.savefig(settings.BASE_DIR+'/media/plot_'+profile.user_name+'_bmi.png')
			return render(request,'profiles/profile_details.html', {'profile':profile})
		else: 
			return render(request,'profiles/profile_details.html', {'profile':profile})

	else:
		return render(request,'profiles/profile_details.html', {'profile':profile})

@login_required
def index2(request):
	if request.user.is_authenticated:
		profile = models.Profile.objects.get(user_name=request.user.username)
	return render(request, 'profiles/user_image.html',{'profile':profile})

@login_required
def user_image(request):
	
	if request.user.is_authenticated:
			profile = models.Profile.objects.get(user_name=request.user.username)

	if request.method == "POST":
		profile.img = request.FILES['img']
		profile.save()
		return render(request,'profiles/profile_details.html', {'profile':profile})
	else: 
		return render(request,'profiles/profile_details.html', {'profile':profile})
