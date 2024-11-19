from django.urls import path
from .views import RecommendAppView, predict

urlpatterns = [
    path('', RecommendAppView.as_view(), name=''),
    path('predict', predict)
]