# categories/models.py
from django.db import models

class Category(models.Model):
    CATEGORY_CHOICES = [
        ('web_design', 'Web Design'),
        ('graphic_design', 'Graphic Design'),
        ('video_editing', 'Video Editing'),
        ('online_marketing', 'Online Marketing'),
        ('development', 'Development'),
        ('foreign_language', 'Foreign Language Learning'),
    ]
    
    name = models.CharField(max_length=100, choices=CATEGORY_CHOICES, unique=True)
    slug = models.SlugField(max_length=100, unique=True)  

    def __str__(self):
        return self.get_name_display() 