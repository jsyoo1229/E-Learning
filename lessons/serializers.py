# lessons/serializers.py
from rest_framework import serializers
from .models import Lesson

class LessonSerializer(serializers.ModelSerializer):
    class Meta:
        model = Lesson
        fields = ['id', 'title', 'slug', 'content', 'video_url', 'course', 'owner']
        read_only_fields = ['owner']