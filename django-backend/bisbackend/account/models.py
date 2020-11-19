from django.db import models


# Create your models here.
class Account(models.Model):
    # TODO: add rating_count, rating_avg, rating_value
    id = models.AutoField(primary_key=True)
    username = models.CharField(max_length=20, unique=True, blank=False)
    email = models.CharField(max_length=255, unique=True, blank=False)
    password_hash = models.CharField(max_length=255, blank=False)

    def __str__(self):
        return "username {}".format(self.username)
