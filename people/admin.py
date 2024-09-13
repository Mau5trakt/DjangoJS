from django.contrib import admin
from .models import Publication
# Register your models here.

@admin.register(Publication)
class AdminPublication(admin.ModelAdmin):
    list_display = ["id", "username", "content", 
                    "timestamp", "likes"]
