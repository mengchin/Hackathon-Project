from django.urls import path
from .views import chatbot_home

urlpatterns = [
    path('', chatbot_home, name='chatbot_home'),
]