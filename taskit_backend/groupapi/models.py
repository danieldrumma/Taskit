from django.db import models

# Create your models here.
class Group(models.Model):
    title = models.CharField(max_length=50)
    image = models.ImageField()
    description = models.CharField(max_length=300)
    members = models.ManyToManyField('profilesapi.Profile')
    tasks = models.ManyToManyField('taskapi.Task')

