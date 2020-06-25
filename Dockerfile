FROM node:latest

RUN npm install -g http-server

# SET DEFAULT WORK DIRECTORY
WORKDIR /vue-todo-list

# COPY package.json and package-lock.json
COPY package*.json ./

# INSTALL DEPENDENCIES
RUN npm install

COPY . .

EXPOSE 8080

# SET START MAIN PROCESS
ENTRYPOINT [ "npm", "run", "serve" ]
