from ...player import Player
import string
import random
from django.core.management.base import BaseCommand, CommandError

def create():

    name_legth = 7

    random_name = ''.join(random.choices(string.ascii_uppercase +
                                         string.digits, k=name_legth))

    print('Creating player with name', random_name)

    Player.objects.create(name=random_name)

    print('Player created successfully!')


class Command(BaseCommand):
    help = 'Creates player with random name to the database'

    def handle(self, *args, **options):
       create()


