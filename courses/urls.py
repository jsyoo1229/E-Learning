from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import ClassViewset, LessonViewset

router = DefaultRouter()
router.register('', ClassViewset)
router.register('', LessonViewset)

urlpatterns = [
    path('', include(router.urls)),
]
