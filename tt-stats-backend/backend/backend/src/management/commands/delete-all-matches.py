from ...match import Match
from django.core.management.base import BaseCommand, CommandError

class Command(BaseCommand):
    help = 'Deletes all matches from database'

    def handle(self, *args, **kwargs):
        Match.objects.all().delete()
        print('All matches deleted from database')

