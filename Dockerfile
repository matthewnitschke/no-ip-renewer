FROM node:alpine

RUN apk add --no-cache bash

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
ENV PATH /usr/src/app/node_modules/.bin:$PATH

COPY package.json /usr/src/app/package.json
RUN yarn install

COPY . /usr/src/app

CMD ["yarn", "start"]