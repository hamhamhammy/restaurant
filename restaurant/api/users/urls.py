from django.conf.urls import url
from django.conf.urls import patterns

from restaurant.api.users import views

urlpatterns = patterns(
    '',

    # This is just to access the register view with a reverse
    url(r'^user/(?P<id>\w+)/$', views.user, name='api-users-user'),

)
