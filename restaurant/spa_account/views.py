import os
import socket

from django.shortcuts import render
from django.http import HttpResponse
from django.http import HttpResponseRedirect

from django.core.urlresolvers import reverse

from restaurant.api.auth.views import logout as api_logout

# Create your views here.
def get_live_reload_url():
    """Change the port in a URL."""
    livereload_port = os.environ.get('LIVE_RELOAD_PORT', 35279)
    return '//%s:%s/livereload.js' % ('159.203.251.105', livereload_port) #socket.getfqdn()

def main(request):
    template_name='spa_account/index.html'
    return render(request, template_name, {
        'live_reload_url': get_live_reload_url()
    })
