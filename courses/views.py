# courses/views.py
from rest_framework.viewsets import ReadOnlyModelViewSet
from .models import Course
from .serializers import CourseSerializer
from django_filters.rest_framework import DjangoFilterBackend
from .filters import CourseFilter
from rest_framework.pagination import PageNumberPagination
from .permissions import IsOwnerOrReadOnly

class CustomPagination(PageNumberPagination):
    page_size = 10  
    page_size_query_param = 'page_size'
    max_page_size = 100

class CourseViewset(ReadOnlyModelViewSet):
    queryset = Course.objects.all()
    serializer_class = CourseSerializer
    lookup_field = 'slug'
    filter_backends = [DjangoFilterBackend]
    filterset_class = CourseFilter
    pagination_class = CustomPagination
    permission_classes = [IsOwnerOrReadOnly] 

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)



    



    
