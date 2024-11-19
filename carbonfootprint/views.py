from django.shortcuts import render
from django.http import HttpResponse, JsonResponse, HttpResponseRedirect
from django.views.decorators.csrf import csrf_exempt
from django.core.serializers import serialize
from .models import CarbonFootprint
import json
from django.shortcuts import render, get_object_or_404
from rest_framework import generics
from rest_framework.response import Response



# Create your views here.
def CFFilterView(request):
    qs = CarbonFootprint.objects.all()
    crop_query = request.GET.get('cropDropdown')
    region_query = request.GET.get('regionDropdown')   
    #create filter
    qsfilter= qs.filter(cropname = crop_query)
    context = {'queryset': qsfilter}
    return render(request, 'carbonfootprint.html', context)

#def CarbonFootprintView(request):
#    data = serialize('json', CarbonFootprint.objects.all(),
#        fields = ('cropname','sourcedb_name', 'lifecycle_stage', 'origin_region', 'applicable_region', 'production_system','factor_kg_co2e', 'func_unit'))
#    return HttpResponse(data, content_type='application/json')
