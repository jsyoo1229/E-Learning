# users/urls.py
from rest_framework.routers import DefaultRouter
from rest_framework_simplejwt.views import TokenRefreshView
from django.urls import path
from .views import UserViewset, UserCreateView
from .views import CustomTokenObtainPairView

router = DefaultRouter()
router.register('', UserViewset, basename='user')

# urlpatterns = router.urls

urlpatterns = [
    path('login/', CustomTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),   
    path("signup/", UserCreateView.as_view(), name="signup"),
]
