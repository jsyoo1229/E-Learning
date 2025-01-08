# users/models.py
from django.contrib.auth.models import AbstractUser
from django.db import models

class User(AbstractUser):
    ROLE_CHOICES = [
        ('student', 'Student'),
        ('instructor', 'Instructor'),
    ]
    role = models.CharField(max_length=20, choices=ROLE_CHOICES, default='student')
    email = models.EmailField(unique=True)  

    # 이메일을 인증 필드로 사용
    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = []  # 이메일 외 추가 필드를 요구하지 않음

    def __str__(self):
        return f"{self.email} ({self.role})"
