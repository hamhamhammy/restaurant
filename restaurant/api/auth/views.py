import json

from django.shortcuts import render
from django.http import HttpResponse, HttpResponseBadRequest, HttpResponseServerError

from django.views.decorators.csrf import csrf_exempt
from django.utils.html import escape

from django.contrib import auth
from django.contrib.auth.models import User
from restaurant.api.models import UserProfile


@csrf_exempt
def register(request):
    if request.method != "POST":
        return HttpResponseBadRequest('{"error": "GET not allowed"}')

    body = json.loads(request.body)

    if 'email' not in body:
        return HttpResponseBadRequest('{"error": "must provide email"}')

    if 'username' not in body:
        return HttpResponseBadRequest('{"error": "must provide username"}')

    if 'password' not in body:
        return HttpResponseBadRequest('{"error": "must provide password"}')

    email = body['email']
    username = body['username']
    password = body['password']

    user = User.objects.create_user(email=email, username=username, password=password)
    user.save()

    userprofile = UserProfile.objects.create(user=user, phone_number='555-555-5555')
    userprofile.save()

    try:
        User.objects.get(pk=user.pk)
        UserProfile.objects.get(pk=userprofile.pk)
        return HttpResponse('{"success": "created account"}')
    except ObjectDoesNotExist:
        return HttpResponseServerError('{"error": "api failed to create user"}')


@csrf_exempt
def login(request):
    if request.method != "POST":
        return HttpResponseBadRequest('{"error": "GET not allowed"}')

    body = json.loads(request.body)

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
        # Redirect to a success page.
        return HttpResponse('{"success": "logged in - look at cookies"}')
    else:
        # Show an error page
        return HttpResponseServerError('{"error": "user does not exist or is not active"}')

@csrf_exempt
def logout(request):
    auth.logout(request)
    return HttpResponse('logout')
