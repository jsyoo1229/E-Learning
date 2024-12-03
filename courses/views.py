from rest_framework import viewsets
from django_filters.rest_framework import DjangoFilterBackend
from .models import Course, Lesson
from .serializers import LessonSerializer, CourseSerializer
from .filters import CourseFilter

class ClassViewset(viewsets.ModelViewSet):
    queryset = Course.objects.all()
    serializer_class = CourseSerializer
    filter_backends = [DjangoFilterBackend]
    filterset_class = CourseFilter

class LessonViewset(viewsets.ModelViewSet):
    queryset = Lesson.objects.all()    
    serializer_class = LessonSerializer

    
