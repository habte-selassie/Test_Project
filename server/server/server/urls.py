"""
URL configuration for server project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
 
from . import api 


from .views import (
    get_mission, create_mission, update_mission, delete_mission,
    get_vision, create_vision, update_vision, delete_vision,
    get_objectives, create_objective, update_objective, delete_objective,
)

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/mission/', get_mission, name='get_mission'),
    path('api/mission/create/', create_mission, name='create_mission'),
    path('api/mission/update/<int:mission_id>/', update_mission, name='update_mission'),
    path('api/mission/delete/<int:mission_id>/', delete_mission, name='delete_mission'),

    path('api/vision/', get_vision, name='get_vision'),
    path('api/vision/create/', create_vision, name='create_vision'),
    path('api/vision/update/<int:vision_id>/', update_vision, name='update_vision'),
    path('api/vision/delete/<int:vision_id>/', delete_vision, name='delete_vision'),

    path('api/objectives/', get_objectives, name='get_objectives'),
    path('api/objectives/create/', create_objective, name='create_objective'),
    path('api/objectives/update/<int:objective_id>/', update_objective, name='update_objective'),
    path('api/objectives/delete/<int:objective_id>/', delete_objective, name='delete_objective'),
]
