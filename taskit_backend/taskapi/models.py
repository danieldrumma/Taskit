from django.db import models

# Create your models here.
class Task(models.Model):
    text = models.CharField(max_length=200)
    state = models.CharField(max_length=20)
    creator = models.OneToOneField('profileapi.profile')
    value = models.IngegerField
    time = models.DateTimeField
