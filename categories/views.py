# categories/views.py
from rest_framework.viewsets import ReadOnlyModelViewSet
from .models import Category
from .serializers import CategorySerializer

class CategoryViewset(ReadOnlyModelViewSet):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer
    lookup_field = 'slug'

