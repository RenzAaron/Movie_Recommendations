from django.db import models

class Movie(models.Model):
    title = models.CharField(max_length=255)
    genre = models.CharField(max_length=100)
    rating = models.FloatField()
    description = models.TextField()
    release_year = models.IntegerField()

    def __str__(self):
        return self.title