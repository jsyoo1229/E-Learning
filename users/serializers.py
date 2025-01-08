# users/serializers.py
from rest_framework import serializers
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from .models import User

class UserSerializer(serializers.ModelSerializer):
    password1 = serializers.CharField(write_only=True)
    password2 = serializers.CharField(write_only=True)

    class Meta:
        model = User
        fields = ('id', 'email', 'password1', 'password2', 'role')

    def validate(self, attrs):
        # 비밀번호 일치 여부 확인
        if attrs['password1'] != attrs['password2']:
            raise serializers.ValidationError({"password": "Passwords didn't match."})
        return attrs

    def create(self, validated_data):
        try:
            print("Validated data before processing:", validated_data)

            # `password2` 제거
            validated_data.pop('password2')
            password = validated_data.pop('password1')

            # `username` 자동 생성
            if not validated_data.get('username'):
                validated_data['username'] = validated_data['email']  # 이메일을 기본 username으로 사용

            user = User(**validated_data)
            print("User instance created:", user)

            user.set_password(password)  # 비밀번호 해시 처리
            print("Password hashed successfully.")

            user.save()  # 데이터베이스에 저장
            print("User saved to database:", user)
            return user
        except Exception as e:
            print(f"Error during user creation: {e}")
            raise serializers.ValidationError({"error": str(e)})





class CustomTokenObtainPairSerializer(TokenObtainPairSerializer):
        @classmethod
        def get_token(cls, user):
            token = super().get_token(user)
            token['user_id'] = user.id
            return token

        def validate(self, attrs):
            data = super().validate(attrs)
            data['user_id'] = self.user.id
            return data