from django.shortcuts import render
from django.http import HttpResponse

from django.views.decorators.csrf import csrf_exempt
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
