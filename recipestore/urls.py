from django.urls import path
from . import views

urlpatterns = [
    path("", views.store, name="recipestore"),
    path('addstore',views.addpoint,name='addstore'),
]