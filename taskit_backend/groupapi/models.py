from django.db import models
# Create your models here.
class Group(models.Model):
    title = models.CharField(max_length=50, default='')
    image = models.ImageField(default='img.jpg')
    description = models.CharField(max_length=300, default='')
    members = models.ManyToManyField('profileapi.Profile')
    tasks = models.ManyToManyField('taskapi.Task')

