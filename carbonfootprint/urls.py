from django.urls import path
from . import views

urlpatterns = [
    path("", views.CFFilterView, name="cf_library"),
]