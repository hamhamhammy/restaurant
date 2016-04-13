from django.shortcuts import render
from django.http import HttpResponse

from django.views.decorators.csrf import csrf_exempt

from django.contrib import auth
from django.contrib.auth.models import User

@csrf_exempt
def register(request):
    if request.method == "POST":
        email = request.POST['email']
        username = request.POST['username']
        password = request.POST['password']
        user = User.objects.create_user(email=email,
                                        username=username,
                                        password=password)
        user.save()

        try:
            User.objects.get(pk=user.pk)
            return HttpResponse('saved' + str(user.pk))
        except ObjectDoesNotExist:
            return HttpResponse('failed to save')

    else:
        return HttpResponse('GET api/auth/register')

@csrf_exempt
def login(request):
    if request.method == "POST":
        username = request.POST['username']
        password = request.POST['password']
        user = auth.authenticate(username=username, password=password)
        if user is not None and user.is_active:
            # Correct password, and the user is marked "active"
            auth.login(request, user)
            # Redirect to a success page.
            return HttpResponse("login success")
        else:
            # Show an error page
            return HttpResponse("login failed")
    else:
        return HttpResponse('GET api/auth/login')
