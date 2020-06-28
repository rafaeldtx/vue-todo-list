# vue-todo-list
This repository has a simple example of a todo list app in Vue.js

### System requirements
- Docker/Docker-compose ([docker](https://docs.docker.com/engine/install "docker") / [docker-compose](https://docs.docker.com/compose/install/ "docker-compose"))

### Setup Project

Access the terminal inside project folder and execute the steps:

Build image
```
$ docker-compose build
```

Run project in background (detached)
```
$ docker-compose up -d
```

## Running tests
Access the active terminal **"vue-todo-list"**
```
$ docker exec -it vue-todo-list bash
```

### Run tests
```
$ npm run test:unit
```

### Lints and fixes files
```
$ npm run lint
```

