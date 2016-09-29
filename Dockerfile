FROM node:latest

WORKDIR /var/app

ADD . .

RUN npm install

ENTRYPOINT ["node", "server.js"]
