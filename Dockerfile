# Build stage
FROM node:12-alpine as builder
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install

COPY . .
EXPOSE 3000/tcp

CMD ["npm", "start"]