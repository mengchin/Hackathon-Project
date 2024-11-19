from django.contrib import admin

# Register your models here.
from import_export import resources
from .models import CarbonFootprint
from import_export.admin import ImportExportModelAdmin

class CFResource(resources.ModelResource):

    class Meta:
        model = CarbonFootprint 

class CarbonFootprintAdmin(ImportExportModelAdmin):
    resource_classes = [CFResource]

admin.site.register(CarbonFootprint, CarbonFootprintAdmin)