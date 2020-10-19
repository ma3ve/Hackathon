from django.contrib import admin
from django.urls import path
from django.urls import path
from .views import get_user, lr_google, ProfileCreateView, EducationCreateView, ExperienceCreateView, EducationListView, ExperienceListView
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)

urlpatterns = [
    path('getuser/', get_user),
    path('googleLogin/', lr_google),
    path('token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('profile/', ProfileCreateView.as_view(), name='profile'),
    path('create_education/', EducationCreateView.as_view(), name='education'),
    path('create_experience/', ExperienceCreateView.as_view(), name='experience'),
    path('education/', EducationListView.as_view(), name='educationlist'),
    path('experience/', ExperienceListView.as_view(), name='experiencelist')
]
