# courses/urls.py
from rest_framework.routers import DefaultRouter
from .views import CourseViewset

router = DefaultRouter()
router.register('', CourseViewset, basename='course')

urlpatterns = router.urls

