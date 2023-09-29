from django.shortcuts import render
from rest_framework import generics, status
from .serializers import * 
from .models import Profile
from rest_framework.views import APIView
from rest_framework.response import Response
import geohash2 

# Create your views here.


class ProfileView(generics.ListAPIView):
    queryset = Profile.objects.all();
    serializer_class = ProfileSerializer;


class GetProfile(APIView): 
    serializer_class  = ProfileSerializer;
    lookup_url_kwargs = 'num';
    def get(self , request , format=None) -> Response:
        num = request.GET.get(self.lookup_url_kwargs); 
        print(num);
        if num is not None :
            profile = Profile.objects.filter(num=num);
            if len(profile) > 0 : 
                data = self.serializer_class(profile[0]).data ;
                 
                return Response(data=data , status=status.HTTP_200_OK);
            return Response({"'Bad_Request':'Invalide number'"},status=status.HTTP_404_NOT_FOUND);
            
        return Response({"'Bad_Request':  You did not enter a profile number."},status=status.HTTP_400_BAD_REQUEST);



     

class LoginProfileView(APIView):
    serializer_class = LoginSerializer

    def get(self, request, format=None):
        serializer = self.serializer_class(data=request.data)
        print("----------------------------------------------------")
        print(serializer)
        print("-  ---- -------------- ---------------------------------")

        if serializer.is_valid():
            num = serializer.validated_data.get('num')
            password = serializer.validated_data.get('password')
            
            try:
                profile = Profile.objects.get(num=num)
            except Profile.DoesNotExist:
                return Response({'error': 'Invalid number', 'AUTHORIZED' : False}, status=status.HTTP_404_NOT_FOUND)
            
            if profile.password == password:
                return Response({'message': 'Login successful' , 'AUTHORIZED' : True}, status=status.HTTP_200_OK)
            else:
                return Response({'error': 'Invalid password', 'AUTHORIZED' : False}, status=status.HTTP_401_UNAUTHORIZED)
        
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
 
class CreateProfileView(APIView):
    serializer_class = CreateProfileSerializer

    def post(self, request, format=None) -> Response:
        serializer = self.serializer_class(data=request.data)
        print("----------------------------------------------------")
        print(serializer)
        print("----------------------------------------------------")
        
        if serializer.is_valid():
 
            #position = serializer.data["position"]
            Kind     = serializer.data["Kind"]
            name     = serializer.data["name"]
            num      = serializer.data["num"]
            password = serializer.data["password"]
            gender   = serializer.data["gender"]
            age      = serializer.data["age"]

            
            profile = Profile(
                position     = "position" , 
                Kind         = Kind , 
                name         = name , 
                num          = num , 
                password     = password , 
                gender       = gender , 
                age          = age ,
                score        =   10  , 
            )                           
            profile.save()
            return Response(ProfileSerializer(profile).data, status=status.HTTP_201_CREATED)

        print("----------------------------------------------------")
        print(serializer.errors)
        print("----------------------------------------------------")
        return Response({'Bad Request': 'Invalid data...'}, status=status.HTTP_400_BAD_REQUEST)