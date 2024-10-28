FROM node:20.18.0-alpine3.20

ENV TZ="America/Sao_Paulo"

WORKDIR /application

COPY . /application

RUN rm -Rf .next/cache

RUN apk upgrade --update-cache --available && \
    apk add openssl && \
    rm -rf /var/cache/apk/*

RUN npm i -g yarn

RUN yarn i

ENV NODE_ENV=development

EXPOSE 5000

CMD ["yarn" , "dev"]