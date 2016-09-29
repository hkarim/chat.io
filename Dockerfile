FROM node:latest

RUN npm install -g npm@latest

WORKDIR /var/app

ADD . .

RUN npm install

ENTRYPOINT ["node", "server.js"]
