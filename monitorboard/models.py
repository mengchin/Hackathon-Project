from django.db import models
import faostat
import pandas as pd


# Create your models here.
def get_production_data(params):
    production_data = faostat.get_data('QCL', pars=params)
    return production_data