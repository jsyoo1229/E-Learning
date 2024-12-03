import django_filters
from .models import Course

class CourseFilter(django_filters.FilterSet):
    title = django_filters.CharFilter(lookup_expr='icontains')  # 제목 검색
    category = django_filters.CharFilter(lookup_expr='exact')  # 카테고리 필터링
    instructor = django_filters.NumberFilter(field_name='instructor__id')  # 강사 ID로 필터링

    class Meta:
        model = Course
        fields = ['title', 'category', 'instructor']
