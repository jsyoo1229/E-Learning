# config/urls.py
from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('categories/', include('categories.urls')),  # /categories/
    path('categories/<slug:category_slug>/courses/', include('courses.urls')),  # /categories/programming/courses/
    path('categories/<slug:category_slug>/courses/<slug:course_slug>/lessons/', include('lessons.urls')),  # /categories/programming/courses/python-basics/lessons/
    path('users/', include('users.urls')),  # /users/
]
