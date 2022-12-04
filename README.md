# tt-stats

- Python application for storing table tennis results


## Prerequisites

- Docker
- Python version 3.8

### How to run locally

## Backend
Copy the contents from `tt-stats-backend/backend/backend/.env.dist` to `tt-stats-backend/backend/backend/.env`

Run `docker-compose up` and go to `localhost:8000/graphql`

Write query to test that the GraphQL interface is working

```
query {
 hello
}
```

or fetch players

```
query {
 players {
  id,
  name
}
}
```

Write mutation to create a match:

```
mutation {
  createMatch(loserId: 1, winnerId: 2) {
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
```

## Frontend

Copy contents from `tt-stats-frontend/.env.dist` to `tt-stats-frontend/.env.local`

```
cd tt-stats-frontend
yarn serve
```

and open `localhost:8080`


### Typescript code generation

```
cd tt-stats-frontend
yarn gql:generate
```


### Formatting and typechecking

Commands for formatting and type checking:

```
cd tt-stats-frontend
yarn lint
yarn lint --fix
yarn types:chck
```
### Migrations


## Generate migrations

Generate migrations with command

```
docker-compose exec tt-stats-backend bash -c "python backend/manage.py makemigrations src"
```

## Run migrations

Run all migrations with command

```
docker-compose exec tt-stats-backend bash -c "python backend/manage.py migrate"
```


### Connection to local database

```
docker-compose exec tt-stats-db bash
psql -U tt-stats
\c tt-stats
```

### Install packages to backend

```
docker-compose exec tt-stats-backend bash -c "pip install package_name"
docker-compose exec tt-stats-backend bash -c "pip freeze > requirements.txt"
```

As you develop, the backend application should work normally. 
NOTE: Every time you run a new version of the backend where new packages is installed you are required to build the Docker image again:

```
docker-compose up --build tt-stats-backend
```

### Seed players

Insert two players into database with command

```
cat ./database-seeds/insert-players.sql| docker-compose exec -T tt-stats-db psql -U tt-stats
```