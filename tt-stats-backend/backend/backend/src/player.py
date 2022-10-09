from django.db import models

class Player(models.Model):
    name = models.CharField(max_length=100)

    class Meta:
        db_table='player'
        