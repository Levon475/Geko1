from django.db import models

# Create your models here.
class Product(models.Model):
    name = models.CharField(max_length = 50, default = "Apranq")
    price = models.DecimalField(decimal_places = 2, max_digits = 7)
    description = models.TextField(max_length = 1000, blank = True, null = True)
    valid = models.DateField()
    #image = models.ImageField(upload_to="")
    quantity = models.PositiveIntegerField(default = 0)