# courses/serializers.py
from rest_framework import serializers
from .models import Course, Lesson, Category

class CourseSerializer(serializers.ModelSerializer):
    class Meta:
        model = Course
        fields = ['id', 'title', 'slug', 'description', 'category', 'owner']
        read_only_fields = ['owner']


