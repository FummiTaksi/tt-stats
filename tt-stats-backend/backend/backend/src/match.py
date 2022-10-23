from django.db import models
from .player import Player

class Match(models.Model):
    winner = models.ForeignKey(
        Player,
        on_delete = models.CASCADE,
        related_name = 'match_winner',
    )
    loser = models.ForeignKey(
        Player,
        on_delete = models.CASCADE,
        related_name = 'match_loser',
    )

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        db_table='match'