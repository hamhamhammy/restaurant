from django.conf.urls import url
from django.conf.urls import patterns

from restaurant.api.auth import views

urlpatterns = patterns(
    '',

    # This is just to access the register view with a reverse
    url(r'^register$', views.register, name='api-auth-register'),
)
