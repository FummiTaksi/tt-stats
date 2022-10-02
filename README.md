# tt-stats

- Python application for storing table tennis results


## Prerequisites

- Docker
- Python version 3.8

### How to run locally

Copy the contents from `tt-stats-backend/backend/backend/.env.dist` to `tt-stats-backend/backend/backend/.env`

Run `docker-compose up` and go to localhost:8000


### Migrations

Run migrations with command

```
docker-compose exec tt-stats-backend bash -c "python backend/manage.py migrate"
```


### Install packages to backend

```
docker-compose exec tt-stats-backend bash -c "pip install package_name"
docker-compose exec tt-stats-backend bash -c "pip freeze > requirements.txt"
```