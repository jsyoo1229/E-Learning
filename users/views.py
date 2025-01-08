# users/views.py
from rest_framework.viewsets import ReadOnlyModelViewSet
from .models import User
from .serializers import UserSerializer
from django.contrib.auth import get_user_model
from rest_framework import generics, permissions
from rest_framework.permissions import IsAuthenticated
from rest_framework_simplejwt.views import TokenObtainPairView
from .serializers import CustomTokenObtainPairSerializer

User = get_user_model()

class UserCreateView(generics.CreateAPIView):
    # queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = [permissions.AllowAny]


class UserViewset(ReadOnlyModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    lookup_field = 'id'  # Since User usually works with ID, not a slug
    permission_classes = [IsAuthenticated]  # 인증된 사용자만 접근 가능

    # 사용자 본인만 자신의 정보를 조회하도록 제한하려면 다음 필터링을 추가
    def get_queryset(self):
        user = self.request.user
        return User.objects.filter(id=user.id)  # 본인 정보만 반환
    

class CustomTokenObtainPairView(TokenObtainPairView):
    serializer_class = CustomTokenObtainPairSerializer    
