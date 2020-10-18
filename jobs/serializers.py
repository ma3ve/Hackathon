from rest_framework import serializers
from main.models import DataModel

class DataModelSerializer(serializers.ModelSerializer):

    class Meta:
        model = DataModel
        fields = ("__all__")


