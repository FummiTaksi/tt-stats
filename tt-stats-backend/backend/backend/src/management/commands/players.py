from ...player import Player
import string
import random
from django.core.management.base import BaseCommand, CommandError

def create(amount):

    for x in range(amount):
        name_legth = 7

        random_name = ''.join(random.choices(string.ascii_uppercase +
                                         string.digits, k=name_legth))

        print('Creating player with name', random_name)

        Player.objects.create(name=random_name)

        print(str(x + 1) + ' players created')



class Command(BaseCommand):
    help = 'Creates player with random name to the database'

    def handle(self, *args, **kwargs):
       amount = kwargs['amount']
       create(amount)

    def add_arguments(self, parser):
        parser.add_argument('--amount', type=int)


