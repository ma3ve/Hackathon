from django.shortcuts import render
from rest_framework.response import Response
import requests
from rest_framework.utils import json
from django.contrib.auth.models import User
from django.contrib.auth.base_user import BaseUserManager
from django.contrib.auth.hashers import make_password
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework.permissions import IsAuthenticated
from rest_framework.decorators import permission_classes, api_view
from .serializers import UserSerializer
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


@api_view(['POST'])
def register_user(request):
    userSerializer = UserSerializer(data=request.data)
    if userSerializer.is_valid(raise_exception=True):
        user = userSerializer.create(userSerializer.validated_data)
    token = RefreshToken.for_user(user)
    response = {}
    response['access_token'] = str(token.access_token)
    response['refresh_token'] = str(token)
    return Response(response)
