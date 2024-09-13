from django.db import models
from datetime import datetime
# Create your models here.

class Publication(models.Model):
    username = models.CharField(max_length=20)
    content = models.CharField(max_length=140)
    timestamp = models.DateTimeField(auto_now_add=True)
    likes = models.PositiveIntegerField(default=0)

    class Meta:
        ordering = ["-timestamp"]
        indexes = [
            models.Index(fields=["-timestamp"])
        ]