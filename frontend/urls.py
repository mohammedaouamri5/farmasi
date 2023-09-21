from django.urls import path
from .views import index

urlpatterns = [
    path('', index),
    path('login/', index),
    path('create/', index),
    path('Me/<int:num>', index),
    path('myProfile/<int:num>/<str:Kind>', index),
]
