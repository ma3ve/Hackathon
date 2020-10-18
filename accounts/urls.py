from django.contrib import admin
from django.urls import path
from django.urls import path
from .views import get_user, lr_google

urlpatterns = [
    path('getuser/', get_user),
    path('googleLogin/', lr_google)
]
