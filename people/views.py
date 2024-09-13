from django.shortcuts import render
from .models import Publication
from django.http import JsonResponse
from django.views.decorators.http import require_POST
import json
# Create your views here.

def index(request):
    publicaciones = Publication.objects.all()

    return render(request, "people/index.html", {"publicaciones": publicaciones})

@require_POST
def darlike(request):
    data = json.load(request)
    print(data["publication"])
    publicacion = Publication.objects.filter(id=data["publication"]).first()
    if publicacion:
        publicacion.likes += 1
        publicacion.save()
        return JsonResponse({"status": True, "likes": publicacion.likes})
    else:
        return JsonResponse({"status": False})


