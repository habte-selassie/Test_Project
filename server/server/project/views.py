from django.shortcuts import render

# Create your views here.
from django.http import JsonResponse
from .models import Mission, Vision, Objective

def get_mission(request):
    mission = Mission.objects.first()
    data = {
        'title': mission.title,
        'description': mission.description
    }
    return JsonResponse(data)

def create_mission(request):
    if request.method == 'POST':
        title = request.POST.get('title')
        description = request.POST.get('description')
        mission = Mission.objects.create(title=title, description=description)
        data = {
            'id': mission.id,
            'title': mission.title,
            'description': mission.description
        }
        return JsonResponse(data)
    else:
        return JsonResponse({'error': 'Invalid request method'}, status=400)

def update_mission(request, mission_id):
    mission = Mission.objects.filter(id=mission_id).first()
    if request.method == 'POST' and mission:
        title = request.POST.get('title')
        description = request.POST.get('description')
        mission.title = title
        mission.description = description
        mission.save()
        data = {
            'id': mission.id,
            'title': mission.title,
            'description': mission.description
        }
        return JsonResponse(data)
    else:
        return JsonResponse({'error': 'Invalid request method or mission not found'}, status=400)

def delete_mission(request, mission_id):
    mission = Mission.objects.filter(id=mission_id).first()
    if request.method == 'POST' and mission:
        mission.delete()
        return JsonResponse({'message': 'Mission deleted successfully'})
    else:
        return JsonResponse({'error': 'Invalid request method or mission not found'}, status=400)


def get_vision(request):
    vision = Vision.objects.first()
    data = {
        'title': vision.title,
        'description': vision.description
    }
    return JsonResponse(data)

def create_vision(request):
    if request.method == 'POST':
        title = request.POST.get('title')
        description = request.POST.get('description')
        vision = Vision.objects.create(title=title, description=description)
        data = {
            'id': vision.id,
            'title': vision.title,
            'description': vision.description
        }
        return JsonResponse(data)
    else:
        return JsonResponse({'error': 'Invalid request method'}, status=400)

def update_vision(request, vision_id):
    vision = Vision.objects.filter(id=vision_id).first()
    if request.method == 'POST' and vision:
        title = request.POST.get('title')
        description = request.POST.get('description')
        vision.title = title
        vision.description = description
        vision.save()
        data = {
            'id': vision.id,
            'title': vision.title,
            'description': vision.description
        }
        return JsonResponse(data)
    else:
        return JsonResponse({'error': 'Invalid request method or vision not found'}, status=400)

def delete_vision(request, vision_id):
    vision = Vision.objects.filter(id=vision_id).first()
    if request.method == 'POST' and vision:
        vision.delete()
        return JsonResponse({'message': 'Vision deleted successfully'})
    else:
        return JsonResponse({'error': 'Invalid request method or vision not found'}, status=400)


def get_objectives(request):
    objectives = Objective.objects.all()
    data = []
    for objective in objectives:
        data.append({
            'id': objective.id,
            'title': objective.title,
            'description': objective.description
        })
    return JsonResponse(data, safe=False)

def create_objective(request):
    if request.method == 'POST':
        title = request.POST.get('title')
        description = request.POST.get('description')
        objective = Objective.objects.create(title=title, description=description)
        data = {
            'id': objective.id,
            'title': objective.title,
            'description': objective.description
        }
        return JsonResponse(data)
    else:
        return JsonResponse({'error': 'Invalid request method'}, status=400)

def update_objective(request, objective_id):
    objective = Objective.objects.filter(id=objective_id).first()
    if request.method == 'POST' and objective:
        title = request.POST.get('title')
        description = request.POST.get('description')
        objective.title = title
        objective.description = description
        objective.save()
        data = {
            'id': objective.id,
            'title': objective.title,
            'description': objective.description
        }
        return JsonResponse(data)
    else:
        return JsonResponse({'error': 'Invalid request method or objective not found'}, status=400)

def delete_objective(request, objective_id):
    objective = Objective.objects.filter(id=objective_id).first()
    if request.method == 'POST' and objective:
        objective.delete()
        return JsonResponse({'message': 'Objective deleted successfully'})
    else:
        return JsonResponse({'error': 'Invalid request method or objective not found'}, status=400)


import json

TEXT_OBJECT_FILE = 'mission.json'


def read_text_object():
    with open(TEXT_OBJECT_FILE, 'r') as file:
        json_data = file.read()
        text_object = json.loads(json_data)
        return text_object


def write_text_object(text_object):
    with open(TEXT_OBJECT_FILE, 'w') as file:
        json_data = json.dumps(text_object)
        file.write(json_data)


def create_text_object(title, description):
    text_object = {
        'title': title,
        'description': description
    }
    write_text_object(text_object)
    return text_object


def update_text_object(title, description):
    text_object = read_text_object()
    text_object['title'] = title
    text_object['description'] = description
    write_text_object(text_object)
    return text_object


def delete_text_object():
    with open(TEXT_OBJECT_FILE, 'w') as file:
        file.write('')


# Example usage
def main():
    # Create a new text object
    create_text_object('Sample Title', 'Sample Description')

    # Read the text object
    text_obj = read_text_object()
    print("Text Object:", text_obj)

    # Update the text object
    updated_text_obj = update_text_object('Updated Title', 'Updated Description')
    print("Updated Text Object:", updated_text_obj)

    # Delete the text object
    delete_text_object()
    deleted_text_obj = read_text_object()
    print("Deleted Text Object:", deleted_text_obj)


if __name__ == '__main__':
    main()