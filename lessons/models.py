# lessons/models.py
from django.db import models
from courses.models import Course  # Link to Course
from users.models import User

class Lesson(models.Model):
    title = models.CharField(max_length=100)
    slug = models.SlugField(max_length=100, unique=True)  # Used for URL
    content = models.TextField()
    video_url = models.URLField()
    course = models.ForeignKey(Course, on_delete=models.CASCADE, related_name='lessons')
    owner = models.ForeignKey(User, on_delete=models.CASCADE, related_name='owned_lessons')

    def __str__(self):
        return self.title