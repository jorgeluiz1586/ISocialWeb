FROM node:lts-alpine AS development

RUN apk update && \
    apk upgrade && \
    apk add bash

WORKDIR /usr/src/app

RUN npm install --location=global npm@latest

RUN npm install --location=global typescript

FROM node:lts-alpine as production

RUN apk update && \
    apk upgrade && \
    apk add bash

WORKDIR /usr/src/app

RUN npm install --location=global npm@latest

RUN npm install --location=global typescript
