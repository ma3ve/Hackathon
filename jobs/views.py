from django.shortcuts import render
from .models import DataModel
from .serializers import DataModelSerializer
from rest_framework import viewsets

# Create your views here.
class DataModelViewset(viewsets.ModelViewSet):
	serializer_class = DataModelSerializer
	queryset = DataModel.objects.all().order_by('-postdate')