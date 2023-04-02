import graphene
from graphene_django import DjangoObjectType
from .src.player import Player
from .src.match import Match

class PlayerType(DjangoObjectType):
    class Meta:
        model = Player

class MatchType(DjangoObjectType):
    class Meta:
        model = Match


class createPlayer(graphene.Mutation):
    player = graphene.Field(PlayerType)

    class Arguments:
        name = graphene.String(required=True)
    
    def mutate(self, resolve, **kwargs):
        player = Player.objects.create(
            name = kwargs.get('name')
        )
        return createPlayer(name=name)

class createMatch(graphene.Mutation):
    match = graphene.Field(MatchType)

    class Arguments:
        winner_id = graphene.ID(required=True)
        loser_id = graphene.ID(required=True)

    def mutate(self, resolve, **kwargs):
        match = Match.objects.create(
            winner_id=kwargs.get('winner_id'),
            loser_id=kwargs.get('loser_id')
        )
        return createMatch(match=match)

class Query(graphene.ObjectType):
    hello = graphene.String()
    players = graphene.List(PlayerType)

    def resolve_hello(self, resolve, **kwargs):
        return 'Hello World!'

    def resolve_players(self, resolve, **kwargs):
        return Player.objects.all()

class Mutation(graphene.ObjectType):
    create_match = createMatch.Field()
    create_player = createPlayer.Field()

schema = graphene.Schema(query=Query, mutation=Mutation)
