from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.
def main(request):
    template_name='spa_account/index.html'
    return render(request, template_name, {
        'foobar': 'foobar'
    })

def login(request):
    template_name='spa_account/login.html'
    return render(request, template_name, {})

def logout(request):
    # template_name='spa_account/logout.html'
    # return render(request, template_name, {})
    return HttpResponse('whoa')

def register(request):
    template_name='spa_account/register.html'
    return render(request, template_name, {})
