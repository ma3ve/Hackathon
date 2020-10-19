from django.db import models
from django.contrib.auth import get_user_model

User = get_user_model()

class Profile(models.Model):
    GENDER_CHOICES = (
        ('m', 'male'),
        ('f', 'female'),
        ('o', 'other')
    )
    user      = models.OneToOneField(User,on_delete=models.CASCADE)
    about     = models.CharField(max_length=255)
    gender    = models.CharField(max_length= 1, choices=GENDER_CHOICES, blank=True)   
    dob       = models.DateField() 

    def __str__(self):
        return self.user.username

class Experience(models.Model):
    user       = models.ForeignKey(User,on_delete=models.CASCADE, default=None)
    title      = models.CharField(max_length=255)
    start_date = models.DateField()
    end_date   = models.DateField()
    company    = models.CharField(max_length=255)

    def  __str__(self):
        return self.title

class Education(models.Model):

    HIGHER_EDUCATION_CHOICES=(
        ('10th', 'Secondary Education'),
        ('12th', 'Senior Education'),
        ('Grad', 'Graduation'),
        ('Post-Grad', 'Post-Graduation')
    )
    user      = models.ForeignKey(User, on_delete=models.CASCADE, default=None)
    education = models.CharField(max_length=10, choices=HIGHER_EDUCATION_CHOICES)
    institute = models.CharField(max_length=255)
    major     = models.CharField(max_length=255)

    def  __str__(self):
        return self.education

    
    



