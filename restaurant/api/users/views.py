import json

from django.shortcuts import render
from django.http import HttpResponse, HttpResponseBadRequest, HttpResponseServerError, HttpResponseNotFound
from django.core import serializers

from django.views.decorators.csrf import csrf_exempt

from django.contrib.auth.models import User


@csrf_exempt
def user(request, id):
    if request.method == "GET":

        if not request.user.is_authenticated():
            return HttpResponseBadRequest('{"error": "must be logged in"}')

        if int(request.user.id) != int(id):
            return HttpResponseBadRequest('{"error": "must be logged in as that user"}')

        user = User.objects.get(id=id)

        if user:
            data = json.dumps({
                'id': int(user.id),
                'firstName': user.first_name,
                'lastName': user.last_name,
                'email': user.email,
                'phone_number': user.userprofile.phone_number
            })
            return HttpResponse(data)
        else:
            return HttpResponseNotFound('{"error": "user not found"}')

    else:
        return HttpResponseBadRequest('{"error": "POST/PUT/DELETE not allowed"}')
