# courses/admin.py
from django.contrib import admin
from .models import Course

@admin.register(Course)
class CourseAdmin(admin.ModelAdmin):
    list_display = ('title', 'category', 'owner', 'created_at')
    list_filter = ('category',)
    search_fields = ('title', 'category__name', 'owner__username')
