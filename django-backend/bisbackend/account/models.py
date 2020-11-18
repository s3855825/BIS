from django.db import models


# Create your models here.
class Account(models.Model):
    # TODO: add rating_count, rating_avg, rating_value
    id = models.AutoField(primary_key=True)
    username = models.Charfield(max_length=20, unique=True)
    email = models.Charfield(unique=True)
    password_hash = models.Charfield()
