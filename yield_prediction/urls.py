from django.urls import path
from .views import predict, PredictAppView

urlpatterns = [
    path('', PredictAppView.as_view(), name=''),
    path('predict', predict)
]