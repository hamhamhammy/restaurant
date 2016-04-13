# from django.conf.urls import url
# from django.conf.urls import patterns
#
# from restaurant.spa_account import views
#
# urlpatterns = patterns(
#     '',
#     url(r'^$', views.main, name='spa-account-home'),
#
#     # This is just to access the login view with a reverse
#     url(r'^login$', views.login, name='spa-account-login'),
#
#     # This is just to access the logout view with a reverse
#     url(r'^logout$', views.logout, name='spa-account-logout'),
#
#     # This is just to access the register view with a reverse
#     url(r'^register$', views.register, name='spa-account-register'),
# )

from django.conf.urls import include
from django.conf.urls import patterns
from django.conf.urls import url
from django.contrib import admin

from restaurant.api.auth import views as auth_views

urlpatterns = patterns(
    '',
    url(r'^auth/', include('restaurant.api.auth.urls')),
)
