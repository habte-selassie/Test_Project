from django.http import JsonResponse
from .models import Mission, Vision, Objective 

def get_mission(request):
    mission = Mission.objects.first()
    data = {
        'title':mission.title,
        'description': mission.description
    }
    return JsonResponse(data)

def get_vision(request):
    vision = Vision.objects.first()
    data = {
        'title': vision.title,
        'description': vision.description
    }
    return JsonResponse(data)

def get_objectives(request):
    objectives = Objective.objects.all()
    data = []
    for objective in objectives:
        data.append({
            'title': objective.title,
            'description': objective.description
        })
    return JsonResponse(data, safe=False)