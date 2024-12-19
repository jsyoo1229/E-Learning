# categories/serializers.py
from rest_framework import serializers
from .models import Category
from courses.serializers import CourseSerializer

class CategorySerializer(serializers.ModelSerializer):
    courses = CourseSerializer(many=True, read_only=True)  # All related courses

    class Meta:
        model = Category
        fields = ['id', 'name', 'courses']