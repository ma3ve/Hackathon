from django.shortcuts import render
from .models import JobModel
from .serializers import JobModelSerializer
from rest_framework import viewsets
from rest_framework.pagination import PageNumberPagination
from rest_framework.permissions import IsAuthenticated
from rest_framework.decorators import action
from rest_framework.response import Response

def checkloc(req, city_string):
	city_list = city_string.strip().split(', ')
	if req in city_string:
		return True
	else:
		return False

class StandardResultsSetPagination(PageNumberPagination):
    page_size = 20
    page_size_query_param = 'page_size'
    max_page_size = 1000

# Create your views here.
class JobModelViewset(viewsets.ModelViewSet):
	serializer_class = JobModelSerializer
	queryset = JobModel.objects.all().order_by('-postdate')
	pagination_class = StandardResultsSetPagination
	permission_classes = (IsAuthenticated,)
	
	@action(detail=True, methods=["GET"])
	def location(self, request, *args, **kwargs):
		loc = kwargs['pk']
		active_ids = [job.id for job in JobModel.objects.all() if checkloc(loc, job.joblocation_address)]
		nserv = JobModel.objects.filter(id__in=active_ids).order_by('-postdate')
		paginator = StandardResultsSetPagination()
		result_page = paginator.paginate_queryset(nserv, request)
		serializer = JobModelSerializer(result_page, many=True)
		return paginator.get_paginated_response(serializer.data)
		
