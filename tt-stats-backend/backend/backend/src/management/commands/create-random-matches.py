from ...player import Player
from ...match import Match
import random
from django.core.management.base import BaseCommand, CommandError

def create(amount):

    all_players = list(Player.objects.all())
    for x in range(amount):
        players_of_match = random.sample(all_players, 2)
        players_of_match[0]
        winner_id = players_of_match[0].id
        loser_id=players_of_match[1].id

        Match.objects.create(
            winner_id=winner_id,
            loser_id=loser_id
        )

        print(str(x) + ' matches created')

    print(str(amount) + ' matches created successfully!')


class Command(BaseCommand):
    help = 'Creates match with random players and outcome to the database'

    def handle(self, *args, **kwargs):
        amount = kwargs['amount']
        create(amount)

    def add_arguments(self, parser):
        parser.add_argument('--amount', type=int)
