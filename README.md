# tt-stats

- Python application for storing table tennis results


## Prerequisites

- Docker
- Python version 3.8

### How to run locally

`docker-compose up`

go to localhost:8000


### Migrations

Run migrations with command

```
docker-compose exec tt-stats-backend bash -c "python backend/manage.py migrate"
```