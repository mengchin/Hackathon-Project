from django.contrib.gis.db import models

class stores(models.Model):
    store_id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=100, blank=False)
    location = models.PointField()
    description = models.CharField(max_length=1000, blank=False)