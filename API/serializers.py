from .models import Profile
from rest_framework import serializers
 

class CreateProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = Profile
        fields = ( 
                    "position" , 
                    "Kind" , 
                    "name" , 
                    "num" , 
                    "password" , 
                    "gender" , 
                    "age" , 
                    "score" , 
                    )


class ProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = Profile 
        fields = (  "id" ,
                    "position" , 
                    "Kind" , 
                    "name" , 
                    "num" , 
                    "password" , 
                    "score" , 
                    "gender" , 
                    "age" , )


class LoginSerializer(serializers.ModelSerializer):
    class Meta: 
        model = Profile 
        fields = (  
                   
                    "num" , 
                    "password" , 
                )
