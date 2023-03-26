from ...player import Player
from django.core.management.base import BaseCommand, CommandError

class Command(BaseCommand):
    help = 'Deletes all players from database'

    def handle(self, *args, **kwargs):
        Player.objects.all().delete()
        print('All players deleted from database')

