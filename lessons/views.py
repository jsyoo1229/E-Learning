# lessons/views.py
from rest_framework.viewsets import ModelViewSet
from .models import Lesson
from .serializers import LessonSerializer
from .permissions import IsOwnerOrReadOnly 

class LessonViewset(ModelViewSet):
    queryset = Lesson.objects.all()
    serializer_class = LessonSerializer
    lookup_field = 'slug'
    permission_classes = [IsOwnerOrReadOnly]

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)