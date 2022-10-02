import graphene

class Query(graphene.ObjectType):
    hello = graphene.String()

    def resolve_hello(self, resolve, **kwargs):
        return 'Hello World!'


schema = graphene.Schema(query=Query)