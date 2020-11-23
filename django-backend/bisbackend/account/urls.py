from django.contrib.auth import views
from django.urls import path
from .views import AccountView


urlpatterns = [
    path('', AccountView.index, name='index'),
]
