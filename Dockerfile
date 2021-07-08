FROM node:14.11-alpine
#ENV NODE_ENV=production

RUN mkdir -p /usr/src/nuxt-app
WORKDIR /usr/src/nuxt-app

RUN apk update && apk upgrade
RUN apk add git

COPY . /usr/src/nuxt-app/
RUN npm install
RUN npm run build

EXPOSE 3000
ENV NUXT_HOST=0.0.0.0
ENV NUXT_PORT=3000