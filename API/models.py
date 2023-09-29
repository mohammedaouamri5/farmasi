from django.db import models
from django.contrib.auth.models import User

#Doctor , Pharmacist , pachent 
# Create your models here.

 
class Profile(models.Model):
    position:str = models.CharField(max_length=12, null=True, default=None)
    Kind :str= models.CharField(max_length=10, null=False)
    name:str = models.CharField(max_length=20, unique=True ,  null=False)
    num:int = models.IntegerField(null=False, unique=True)
    password:str = models.CharField(max_length=10, null=False)
    score:int = models.IntegerField(null=False, default=0)  # Example default value
    gender:str = models.CharField(max_length=6 ,default="female") # False for female and True male 
    age:int = models.IntegerField(null=False , default=20) 




