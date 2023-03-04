from django.db import models
from django.contrib.auth.models import User

class Topics(models.Model):
    topicname = models.CharField(max_length=200)
    context = models.TextField()
    example = models.TextField()
    
    def __str__(self):
        return self.topicname

class RecentlyView(models.Model):
    search_date = models.DateTimeField(auto_now=True)
    search_topic = models.CharField(max_length=200)
    feedback = models.IntegerField(default=0)

    def __str__(self):
        return self.search_topic

# Create your models here.
