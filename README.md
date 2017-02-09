# [STARTER] Docker-NodeJS-MongoDB-React

Under the hood
--------
- NodeJS
- ExpressJS
- MongoDB
- Mongoose
- ReactJS
- Webpack
- Nginx (serving static content compiled by react)
- Docker
- docker-compose

## Prerequisites
- Docker
- Node JS (just to install dependencies)

Everything else will be pulled from Docker/Npm repositories !

Getting Started
---------------
```
# clone repository
$ git clone https://github.com/denisolek/docker-node-mongo-react-STARTER.git
$ cd docker-node-mongo-react-STARTER
```
First run
```
# install npm dependencies
$ cd server
$ npm install
$ cd ..
$ cd frontend
$ npm install
$ cd ..
$ docker-compose up

#open second terminal and run seed (every time you execute it destroy DB and make new one)
$ ./seed.sh
```

Regular run
```
# run your app (you can stop it with CTRL+C)
$ docker-compose up

# kill containers (DB data will be lost)
$ docker-compose down
```

In case of problems: denis.olek@gmail.com
