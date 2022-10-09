import graphene
from graphene_django import DjangoObjectType
from .src.player import Player

class PlayerType(DjangoObjectType):
    class Meta:
        model = Player

class Query(graphene.ObjectType):
    hello = graphene.String()
    players = graphene.List(PlayerType)

    def resolve_hello(self, resolve, **kwargs):
        return 'Hello World!'

    def resolve_players(self, resolve, **kwargs):
        return Player.objects.all()


schema = graphene.Schema(query=Query)
