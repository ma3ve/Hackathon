from django.shortcuts import render
from .models import JobModel
from .serializers import JobModelSerializer
from rest_framework import viewsets
from rest_framework.pagination import PageNumberPagination
from rest_framework.permissions import IsAuthenticated
from rest_framework.decorators import action
from rest_framework.response import Response

def checkloc(locs, city_string):
	city_list = city_string.strip().split(', ')
	for loc in locs:
		if loc in city_string:
			return True
	return False

def checkexp(exps, job_exp_cat):
	job_exp_cat_list = job_exp_cat.strip().split(' ')
	for exp in exps:
		if exp in job_exp_cat_list:
			return True
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
	# permission_classes = (IsAuthenticated,)
	
	@action(detail=False, methods=["GET"])
	def location(self, request, *args, **kwargs):
		# loc = kwargs['pk']
		loc = request.query_params.get('loc').split(',')
		active_ids = [job.id for job in JobModel.objects.all() if checkloc(loc, job.joblocation_address)]
		nserv = JobModel.objects.filter(id__in=active_ids).order_by('-postdate')
		paginator = StandardResultsSetPagination()
		result_page = paginator.paginate_queryset(nserv, request)
		serializer = JobModelSerializer(result_page, many=True)
		return paginator.get_paginated_response(serializer.data)
	
	@action(detail=False, methods=["GET"])
	def skills(self, request, *args, **kwargs):
		# loc = kwargs['pk']
		sks = request.query_params.get('skills').split(',')
		# active_ids = [job.id for job in JobModel.objects.all() if checkloc(loc, job.joblocation_address)]
		nserv = JobModel.objects.filter(skills__in=sks).order_by('-postdate')
		paginator = StandardResultsSetPagination()
		result_page = paginator.paginate_queryset(nserv, request)
		serializer = JobModelSerializer(result_page, many=True)
		return paginator.get_paginated_response(serializer.data)
	
	@action(detail=False, methods=["GET"])
	def exp(self, request, *args, **kwargs):
		# loc = kwargs['pk']
		exps = request.query_params.get('exp').split(',')
		active_ids = [job.id for job in JobModel.objects.all() if checkexp(exps, job.job_exp_cat)]
		nserv = JobModel.objects.filter(id__in=active_ids).order_by('-postdate')
		paginator = StandardResultsSetPagination()
		result_page = paginator.paginate_queryset(nserv, request)
		serializer = JobModelSerializer(result_page, many=True)
		return paginator.get_paginated_response(serializer.data)
		
