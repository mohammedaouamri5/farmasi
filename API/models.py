from django.db import models
from django.contrib.auth.models import User

#Doctor , Pharmacist , pachent 
# Create your models here.

 
class Profile(models.Model):
    Kind :str= models.CharField(max_length=10, null=False)
    name:str = models.CharField(max_length=20, unique=True ,  null=False)
    num:int = models.IntegerField(null=False, unique=False)
    password:str = models.CharField(max_length=200, null=False)
    score:int = models.IntegerField(null=False, default=0)  # Example default value
    gender:str = models.CharField(max_length=6 ,default="female") # False for female and True male 
    age:int = models.IntegerField(null=False , default=20) 
 

class Pharmacist(models.Model):
    IdProfile = models.ForeignKey(Profile, on_delete=models.CASCADE)
    some_array_field = models.JSONField(default=list)  # Example field for an array of strings
    location_lat = models.DecimalField(max_digits=9, decimal_places=6)
    location_lon = models.DecimalField(max_digits=9, decimal_places=6)

class Doctor(models.Model):
    IdProfile = models.ForeignKey(Profile, on_delete=models.CASCADE)
    specialization = models.CharField(max_length=100)  # Example field for doctor's specialization
    location_lat = models.DecimalField(max_digits=9, decimal_places=6)
    location_lon = models.DecimalField(max_digits=9, decimal_places=6)
 

 