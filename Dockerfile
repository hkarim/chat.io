FROM node:latest

RUN npm install -g npm@latest

RUN npm install

ENTRYPOINT ["node", "server.js"]
