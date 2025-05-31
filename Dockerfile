# syntax=docker/dockerfile:1

ARG NODE_VERSION=22.5.1

FROM node:${NODE_VERSION}-alpine AS development

WORKDIR /usr/src/app

COPY package*.json .

RUN npm install

RUN npm i ts-node-dev --save-dev

COPY . .

CMD ["npm", "run", "dev"]
