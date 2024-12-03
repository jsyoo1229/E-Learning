from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import CourseViewSet, LessonViewSet

router = DefaultRouter()
router.register('', CourseViewSet)
router.register('', LessonViewSet)

urlpatterns = [
    path('', include(router.urls)),
]
