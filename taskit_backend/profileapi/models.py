from django.db import models


class Profile(models.Model):
    username = models.CharField(max_length=30, default='', unique=True)
    contacts = models.ManyToManyField('Profile')
    history = models.ManyToManyField('taskapi.Task', related_name="task_history")
    curr_groups = models.ManyToManyField('groupapi.Group')
    points = models.IntegerField(null=True)
    active = models.ManyToManyField('taskapi.Task', related_name="task_active")
    role = models.CharField(max_length=50, default='')
    password = models.CharField(max_length=20, default='')


