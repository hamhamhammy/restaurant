from django.shortcuts import render
from django.http import HttpResponse
from django.http import HttpResponseRedirect

from django.core.urlresolvers import reverse

from restaurant.api.auth.views import logout as api_logout

# Create your views here.
def main(request):
    template_name='spa_account/index.html'
    return render(request, template_name)

def login(request):
    if request.user.is_authenticated():
        print "LOG: user already logged in"
    template_name='spa_account/login.html'
    return render(request, template_name, {})

def logout(request):
    template_name='spa_account/logout.html'
    return render(request, template_name, {})

def register(request):
    template_name='spa_account/register.html'
    return render(request, template_name, {})
