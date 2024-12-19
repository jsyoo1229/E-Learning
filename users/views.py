from rest_framework.viewsets import ReadOnlyModelViewSet
from .models import User
from .serializers import UserSerializer

class UserViewset(ReadOnlyModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    lookup_field = 'id'  # Since User usually works with ID, not a slug
