import gql from 'graphql-tag'
import * as VueApolloComposable from '@vue/apollo-composable'
import * as VueCompositionApi from 'vue'
export type Maybe<T> = T | null
export type InputMaybe<T> = Maybe<T>
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K]
}
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>
}
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>
}
export type ReactiveFunction<TParam> = () => TParam
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string
  String: string
  Boolean: boolean
  Int: number
  Float: number
  DateTime: any
}

export type MatchType = {
  __typename?: 'MatchType'
  createdAt: Scalars['DateTime']
  id: Scalars['ID']
  loser: PlayerType
  updatedAt: Scalars['DateTime']
  winner: PlayerType
}

export type Mutation = {
  __typename?: 'Mutation'
  createMatch?: Maybe<CreateMatch>
}

export type MutationCreateMatchArgs = {
  loserId: Scalars['ID']
  winnerId: Scalars['ID']
}

export type PlayerType = {
  __typename?: 'PlayerType'
  id: Scalars['ID']
  matchLoser: Array<MatchType>
  matchWinner: Array<MatchType>
  name: Scalars['String']
}

export type Query = {
  __typename?: 'Query'
  hello?: Maybe<Scalars['String']>
  players?: Maybe<Array<Maybe<PlayerType>>>
}

export type CreateMatch = {
  __typename?: 'createMatch'
  match?: Maybe<MatchType>
}

export type CreateMatchMutationVariables = Exact<{
  loserId: Scalars['ID']
  winnerId: Scalars['ID']
}>

export type CreateMatchMutation = {
  __typename?: 'Mutation'
  createMatch?: {
    __typename?: 'createMatch'
    match?: {
      __typename?: 'MatchType'
      id: string
      createdAt: any
      updatedAt: any
      winner: { __typename?: 'PlayerType'; id: string; name: string }
      loser: { __typename?: 'PlayerType'; id: string; name: string }
    } | null
  } | null
}

export type HelloQueryVariables = Exact<{ [key: string]: never }>

export type HelloQuery = { __typename?: 'Query'; hello?: string | null }

export type PlayersQueryVariables = Exact<{ [key: string]: never }>

export type PlayersQuery = {
  __typename?: 'Query'
  players?: Array<{
    __typename?: 'PlayerType'
    id: string
    name: string
  } | null> | null
}

export const CreateMatchDocument = gql`
  mutation CreateMatch($loserId: ID!, $winnerId: ID!) {
    createMatch(loserId: $loserId, winnerId: $winnerId) {
      match {
        id
        winner {
          id
          name
        }
        loser {
          id
          name
        }
        createdAt
        updatedAt
      }
    }
  }
`

/**
 * __useCreateMatchMutation__
 *
 * To run a mutation, you first call `useCreateMatchMutation` within a Vue component and pass it any options that fit your needs.
 * When your component renders, `useCreateMatchMutation` returns an object that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - Several other properties: https://v4.apollo.vuejs.org/api/use-mutation.html#return
 *
 * @param options that will be passed into the mutation, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/mutation.html#options;
 *
 * @example
 * const { mutate, loading, error, onDone } = useCreateMatchMutation({
 *   variables: {
 *     loserId: // value for 'loserId'
 *     winnerId: // value for 'winnerId'
 *   },
 * });
 */
export function useCreateMatchMutation(
  options:
    | VueApolloComposable.UseMutationOptions<
        CreateMatchMutation,
        CreateMatchMutationVariables
      >
    | ReactiveFunction<
        VueApolloComposable.UseMutationOptions<
          CreateMatchMutation,
          CreateMatchMutationVariables
        >
      >
) {
  return VueApolloComposable.useMutation<
    CreateMatchMutation,
    CreateMatchMutationVariables
  >(CreateMatchDocument, options)
}
export type CreateMatchMutationCompositionFunctionResult =
  VueApolloComposable.UseMutationReturn<
    CreateMatchMutation,
    CreateMatchMutationVariables
  >
export const HelloDocument = gql`
  query Hello {
    hello
  }
`

/**
 * __useHelloQuery__
 *
 * To run a query within a Vue component, call `useHelloQuery` and pass it any options that fit your needs.
 * When your component renders, `useHelloQuery` returns an object from Apollo Client that contains result, loading and error properties
 * you can use to render your UI.
 *
 * @param options that will be passed into the query, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/query.html#options;
 *
 * @example
 * const { result, loading, error } = useHelloQuery();
 */
export function useHelloQuery(
  options:
    | VueApolloComposable.UseQueryOptions<HelloQuery, HelloQueryVariables>
    | VueCompositionApi.Ref<
        VueApolloComposable.UseQueryOptions<HelloQuery, HelloQueryVariables>
      >
    | ReactiveFunction<
        VueApolloComposable.UseQueryOptions<HelloQuery, HelloQueryVariables>
      > = {}
) {
  return VueApolloComposable.useQuery<HelloQuery, HelloQueryVariables>(
    HelloDocument,
    {},
    options
  )
}
export function useHelloLazyQuery(
  options:
    | VueApolloComposable.UseQueryOptions<HelloQuery, HelloQueryVariables>
    | VueCompositionApi.Ref<
        VueApolloComposable.UseQueryOptions<HelloQuery, HelloQueryVariables>
      >
    | ReactiveFunction<
        VueApolloComposable.UseQueryOptions<HelloQuery, HelloQueryVariables>
      > = {}
) {
  return VueApolloComposable.useLazyQuery<HelloQuery, HelloQueryVariables>(
    HelloDocument,
    {},
    options
  )
}
export type HelloQueryCompositionFunctionResult =
  VueApolloComposable.UseQueryReturn<HelloQuery, HelloQueryVariables>
export const PlayersDocument = gql`
  query Players {
    players {
      id
      name
    }
  }
`

/**
 * __usePlayersQuery__
 *
 * To run a query within a Vue component, call `usePlayersQuery` and pass it any options that fit your needs.
 * When your component renders, `usePlayersQuery` returns an object from Apollo Client that contains result, loading and error properties
 * you can use to render your UI.
 *
 * @param options that will be passed into the query, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/query.html#options;
 *
 * @example
 * const { result, loading, error } = usePlayersQuery();
 */
export function usePlayersQuery(
  options:
    | VueApolloComposable.UseQueryOptions<PlayersQuery, PlayersQueryVariables>
    | VueCompositionApi.Ref<
        VueApolloComposable.UseQueryOptions<PlayersQuery, PlayersQueryVariables>
      >
    | ReactiveFunction<
        VueApolloComposable.UseQueryOptions<PlayersQuery, PlayersQueryVariables>
      > = {}
) {
  return VueApolloComposable.useQuery<PlayersQuery, PlayersQueryVariables>(
    PlayersDocument,
    {},
    options
  )
}
export function usePlayersLazyQuery(
  options:
    | VueApolloComposable.UseQueryOptions<PlayersQuery, PlayersQueryVariables>
    | VueCompositionApi.Ref<
        VueApolloComposable.UseQueryOptions<PlayersQuery, PlayersQueryVariables>
      >
    | ReactiveFunction<
        VueApolloComposable.UseQueryOptions<PlayersQuery, PlayersQueryVariables>
      > = {}
) {
  return VueApolloComposable.useLazyQuery<PlayersQuery, PlayersQueryVariables>(
    PlayersDocument,
    {},
    options
  )
}
export type PlayersQueryCompositionFunctionResult =
  VueApolloComposable.UseQueryReturn<PlayersQuery, PlayersQueryVariables>
export const namedOperations = {
  Query: {
    Hello: 'Hello',
    Players: 'Players',
  },
  Mutation: {
    CreateMatch: 'CreateMatch',
  },
}
