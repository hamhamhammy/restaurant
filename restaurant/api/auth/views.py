import json

from django.shortcuts import render
from django.http import HttpResponse, HttpResponseBadRequest, HttpResponseServerError

from django.views.decorators.csrf import csrf_exempt
from django.utils.html import escape

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
    if request.method != "POST":
        return HttpResponseBadRequest('{"error": "GET not allowed"}')

    body = json.loads(request.body)
    print body

    if 'username' not in body:
        return HttpResponseBadRequest('{"error": "must provide username"}')

    if 'password' not in body:
        return HttpResponseBadRequest('{"error": "must provide password"}')


    username = body['username']
    password = body['password']
    user = auth.authenticate(username=username, password=password)
    if user is not None and user.is_active:
        # Correct password, and the user is marked "active"
        auth.login(request, user)
        print "successfully logged in"
        # Redirect to a success page.
        return HttpResponse('{"success": "logged in - look at cookies"}')
    else:
        # Show an error page
        return HttpResponseServerError('{"error": "user does not exist or is not active"}')

@csrf_exempt
def logout(request):
    auth.logout(request)
    return HttpResponse('logout')
