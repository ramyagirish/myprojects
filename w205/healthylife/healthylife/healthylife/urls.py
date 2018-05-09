"""healthylife URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/1.11/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  url(r'^$', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  url(r'^$', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.conf.urls import url, include
    2. Add a URL to urlpatterns:  url(r'^blog/', include('blog.urls'))
"""
from django.conf.urls import url
from django.contrib import admin
from profiles import views
from django.conf.urls.static import static
from django.conf import settings

urlpatterns = [
    url(r'^admin/', admin.site.urls),
    url(r'^$', views.home, name='home'),
    url(r'^profiles/(?P<user_id>[0-9]+)/$', views.profile_details,name='profile'),
    url(r'^signup/', views.signup, name='signup'),
    url(r'^login/', views.login1, name='login'),
    url(r'^create/', views.create, name='create'),
    url(r'^logout_view/', views.logout_view, name='logout_view'),
    url(r'^searchtool/', views.searchtool, name='searchtool'),
    url(r'^index/', views.index, name='index'),
    url(r'^index1/', views.index1, name='index1'),
    url(r'^user_weight/', views.user_weight, name='user_weight'),
    url(r'^index2/', views.index2, name='index2'),
    url(r'^user_image/', views.user_image, name='user_image'),
    url(r'^logged_in/', views.logged_in, name='logged_in'),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
