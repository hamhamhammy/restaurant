from __future__ import unicode_literals

from django.db import models

# Create your models here.

class Reviews(models.Model):
    author_id = models.IntegerField()
    text = models.TextField()
    created_date = models.DateTimeField('date created')

    class Meta:
        db_table = 'reviews'
