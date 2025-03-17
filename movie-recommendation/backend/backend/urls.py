from django.contrib import admin
from django.urls import path, include
from django.http import JsonResponse

# Default home view
def home(request):
    return JsonResponse({"message": "Welcome to the Movie Recommendation API!"})

urlpatterns = [
    path("", home),  # Root URL response
    path("admin/", admin.site.urls),
    path("api/", include("movies.urls")),
]