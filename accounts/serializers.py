from rest_framework import serializers
from .models import Profile, Experience, Education

class ProfileSerializer(serializers.ModelSerializer):

    class Meta:
        model = Profile
        fields=['about', 'dob', 'gender']


class ExperienceSerializer(serializers.ModelSerializer):

    class Meta:
        model = Experience
        fields=['title', 'start_date', 'end_date', 'company']


class EducationSerializer(serializers.ModelSerializer):

    class Meta:
        model = Education
        fields=['education', 'institute', 'major']
