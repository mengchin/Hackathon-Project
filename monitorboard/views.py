from django.http import HttpResponse, JsonResponse
from django.shortcuts import render
from .models import get_production_data
# Create your views here.

#def index(request):
#    return HttpResponse("Hello, world. You're at the polls index.")

params = {
    'area': 'Asia', # Specify the region
    'item': ['Wheat', 'Rice', 'Maize'], # Example crops, adjust as necessary
    'element': ['Production', 'Trade', 'Prices'],
    'year': list(range(2000, 2023)) # Adjust the year range as necessary
}

def index(request):
    return render(request, 'dashboard.html')



