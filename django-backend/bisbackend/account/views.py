from django.shortcuts import render, HttpResponse
from rest_framework import viewsets
from .serializers import AccountSerializer
from .models import Account

# Create your views here.


class AccountView(viewsets.ModelViewSet):
    serializer = AccountSerializer
    queryset = Account.objects.all()

    model = Account

    def index(self):
        return HttpResponse("this is the index page of account app.")
