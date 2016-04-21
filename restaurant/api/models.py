from __future__ import unicode_literals

from django.contrib.auth.models import User
from django.db import models

# Create your models here.

class UserProfile(models.Model):
  user = models.OneToOneField(User)
  phone_number = models.CharField(max_length=100)

class Reviews(models.Model):
    author_id = models.IntegerField()
    text = models.TextField()
    created_date = models.DateTimeField('date created')

    class Meta:
        db_table = 'reviews'
