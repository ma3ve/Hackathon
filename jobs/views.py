from django.shortcuts import render
from .models import JobModel
from .serializers import JobModelSerializer
from rest_framework import viewsets
from rest_framework.pagination import PageNumberPagination
from rest_framework.permissions import IsAuthenticated

class StandardResultsSetPagination(PageNumberPagination):
    page_size = 30
    page_size_query_param = 'page_size'
    max_page_size = 1000

# Create your views here.
class JobModelViewset(viewsets.ModelViewSet):
	serializer_class = JobModelSerializer
	queryset = JobModel.objects.all().order_by('-postdate')
	pagination_class = StandardResultsSetPagination
	permission_classes = (IsAuthenticated,)