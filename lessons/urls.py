# lessons/urls.py
from rest_framework.routers import DefaultRouter
from .views import LessonViewset

router = DefaultRouter()
router.register('', LessonViewset, basename='lesson')

urlpatterns = router.urls
