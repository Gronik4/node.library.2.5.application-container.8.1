FROM node:22.16.0-alpine

WORKDIR /app

ARG NODE_ENV=production

COPY package*.json ./
RUN npm install
COPY ./src src/