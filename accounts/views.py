from django.shortcuts import render
from rest_framework.response import Response
import requests
from rest_framework.utils import json
from django.contrib.auth.models import User
from rest_framework.generics import ListAPIView,CreateAPIView
from django.contrib.auth.base_user import BaseUserManager
from django.contrib.auth.hashers import make_password
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework.permissions import IsAuthenticated
from rest_framework.decorators import permission_classes, api_view
from rest_framework import permissions
from .serializers import ProfileSerializer, EducationSerializer, ExperienceSerializer
from .models import Profile, Experience, Education
# Create your views here.


@api_view(["GET"])
@permission_classes([IsAuthenticated])
def get_user(request):
    user = request.user
    return Response({"authorized": True, "username": user.username})


@api_view(["POST"])
def lr_google(request):
    payload = {'access_token': request.data.get("access_token")}
    r = requests.get(
        'https://www.googleapis.com/oauth2/v2/userinfo', params=payload)
    data = json.loads(r.text)

    if 'error' in data:
        content = {
            'message': 'wrong google token / this google token is already expired.'}
        return Response(content)

    try:
        user = User.objects.get(email=data['email'])
    except User.DoesNotExist:
        user = User()
        user.username = data['email']
        user.password = make_password(BaseUserManager().make_random_password())
        user.email = data['email']
        user.first_name = data['emkay']
        user.save()
    token = RefreshToken.for_user(user)
    response = {}
    response['username'] = user.username
    response['access_token'] = str(token.access_token)
    response['refresh_token'] = str(token)
    response['data'] = data
    return Response(response)

class ProfileCreateView(CreateAPIView):
    permission_classes     = [permissions.IsAuthenticated]
    serializer_class       = ProfileSerializer
    queryset               = Profile.objects.all()
    def perform_create(self,serializer):
        serializer.save(user = self.request.user)

class EducationCreateView(CreateAPIView):
    permission_classes     = [permissions.IsAuthenticated]
    serializer_class       = EducationSerializer
    queryset               = Education.objects.all()
    def perform_create(self,serializer):
        serializer.save(user = self.request.user)

class ExperienceCreateView(CreateAPIView):
    permission_classes     = [permissions.IsAuthenticated]
    serializer_class       = ExperienceSerializer
    queryset               = Experience.objects.all()
    def perform_create(self,serializer):
        serializer.save(user = self.request.user)

class EducationListView(ListAPIView):
    permission_classes     = [permissions.IsAuthenticated]
    queryset               = Education.objects.all()
    serializer_class       = EducationSerializer

    def get_queryset(self): 
        qs = Education.objects.all().filter(user = self.request.user)
        return qs

class ExperienceListView(ListAPIView):
    permission_classes     = [permissions.IsAuthenticated]
    queryset               = Experience.objects.all()
    serializer_class       = ExperienceSerializer

    def get_queryset(self): 
        qs = Experience.objects.all().filter(user = self.request.user)
        return qs






