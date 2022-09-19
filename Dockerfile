FROM node:18-alpine

WORKDIR /app

COPY . /app

ENV NODE_ENV=production

RUN npm install serve -g
RUN npm install typescript -g
RUN npm i --save-dev @types/react
RUN npm i --save-dev @types/react-dom

RUN npm install
RUN npm run build

EXPOSE 3000

RUN npm run serve
