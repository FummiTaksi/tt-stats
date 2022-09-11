# tt-stats

- Python application for storing table tennis results

## Prerequisites

- Python version 3.8.9
- Django version 4.1.1

## Setup

Activate virtual environment:

```
python3 -m venv env
source env/bin/activate
```

Install django and setup django backend

```
python -m pip install django
python -m pip freeze > requirements.txt
django-admin startproject backend
```


## How to run locally

Activate virtual environment:

```
python3 -m venv env
source env/bin/activate
cd backend
python manage.py runserver
```

and start the application:

```
cd backend
python manage.py runserver
```

and go to `localhost:8000`


## Teardown

Stop the application with Ctrl + C. Exit the virtual environment with `deactivate`