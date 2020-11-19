from django.db import models


# Create your models here.
class Group(models.Model):
    id = models.AutoField(primary_key=True)
    group_name = models.CharField(max_length=20, blank=False)
