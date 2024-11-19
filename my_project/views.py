from django.http import HttpResponse, JsonResponse
from django.shortcuts import render

def homeView(request):
    return render(request, 'index.html')
