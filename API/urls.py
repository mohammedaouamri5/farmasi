 
from django.urls import path 
from .views import *
urlpatterns = [
    path( ''  , ProfileView.as_view() ),
    path( 'CreateProfile'  , CreateProfileView.as_view() ),
    path( 'GetProfile'  , GetProfile.as_view() ),
    path( 'LoginProfile'  , LoginProfileView.as_view() ),
 
] ;
