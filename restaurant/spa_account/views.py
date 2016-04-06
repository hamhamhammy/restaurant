from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.
def main(request):
    template_name='spa_account/index.html'
    return render(request, template_name, {
        'foobar': 'foobar'
    })
