# courses/filterts.py
import django_filters
from django.db.models import Count
from .models import Course

class CourseFilter(django_filters.FilterSet):
    title = django_filters.CharFilter(lookup_expr='icontains')
    category = django_filters.CharFilter(lookup_expr='exact')
    owner = django_filters.NumberFilter(field_name='owner__id')  
    created_at = django_filters.DateFilter(lookup_expr='exact')
    created_at_after = django_filters.DateFilter(field_name='created_at', lookup_expr='gte')  
    created_at_before = django_filters.DateFilter(field_name='created_at', lookup_expr='lte')  
    lesson_count = django_filters.NumberFilter(method='filter_lesson_count')  
    ordering = django_filters.OrderingFilter(
        fields=(
            ('title', 'title'),
            ('created_at', 'created_at'),
        )
    )

    class Meta:
        model = Course
        fields = ['title', 'category', 'owner', 'created_at', 'lesson_count']

    def filter_lesson_count(self, queryset, name, value):
        return queryset.annotate(lesson_count=Count('lessons')).filter(lesson_count=value)
