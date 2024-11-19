from rest_framework import serializers
from .models import CarbonFootprint

class StringSerializer(serializers.StringRelatedField):
    def to_internal_value(self, value):
        return value


class CarbonfootprintSerializer(serializers.ModelSerializer):
    author = StringSerializer(many=False)
    
    class Meta:
        model = CarbonFootprint
        fields = ('__all__')