from django.db import models


class Post(models.Model):
    id = models.AutoField(primary_key=True)
    author_id = models.ForeignKey('account.Account', on_delete=models.CASCADE)
    title = models.CharField(max_length=50, blank=False)
    message = models.CharField(max_length=255, blank=True)

    objects = models.Manager()
