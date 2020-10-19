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
from django.contrib.auth.models import User


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = '__all__'
        extra_kwargs = {'password': {'write_only': True}}

    def create(self, validated_data):
        try:
            user = User.objects.get(email=validated_data.get('username'))
            raise serializers.ValidationError("user already exists")
        except User.DoesNotExist:
            user = User(
                username=validated_data['username'],
                first_name=validated_data['first_name'],
                last_name=validated_data['last_name'],
            )
            user.set_password(validated_data['password'])
            user.save()
            return user
