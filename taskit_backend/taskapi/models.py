from django.db import models

# Create your models here.
class Task(models.Model):
    text = models.CharField(max_length=200, default='')
    state = models.CharField(max_length=20, default='Open')
    creator = models.OneToOneField('profileapi.profile', on_delete=models.CASCADE, null=True)
    value = models.IntegerField
    time = models.DateTimeField
