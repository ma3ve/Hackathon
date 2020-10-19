from django.contrib import admin
from django.urls import path
from django.urls import path
from .views import get_user, lr_google
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)

urlpatterns = [
    path('getuser/', get_user),
    path('googleLogin/', lr_google),
    path('token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
]
