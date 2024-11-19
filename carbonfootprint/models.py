from django.db import models
 
class CarbonFootprint(models.Model):
    cropclass = models.CharField(max_length=255)
    cropbrick = models.CharField(max_length=255)
    cropname = models.CharField(max_length=255)
    sourcedb_name = models.CharField(max_length=255)
    source_db_id = 	models.CharField(max_length=255)
    lifecycle_stage	= models.CharField(max_length=255)
    origin_region= models.CharField(max_length=255)
    applicable_region = models.CharField(max_length=255)
    production_system = models.CharField(max_length=255)
    factor_kg_co2e = models.FloatField()
    func_unit = models.CharField(max_length=255)
    factor_type = models.CharField(max_length=255)
    data_quality_score = models.CharField(max_length=255)

    # Metadata
    class Meta:
        ordering = ['cropname','sourcedb_name', 'lifecycle_stage', 'origin_region', 'applicable_region', 'production_system','factor_kg_co2e', 'func_unit']

    def __str__(self):
        return str(self.cropname) + ":" + str(self.source_db_id)