from django.contrib import admin
from django.urls import path
from django.urls import path
from .views import get_helloWorld, lr_google

urlpatterns = [
    path('helloworld/', get_helloWorld),
    path('googleLogin/', lr_google)
]
