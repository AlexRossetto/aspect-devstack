FROM node:18 AS build 

WORKDIR /application

COPY . /application/

ENV NODE_ENV=development

RUN ls -A

RUN yarn install && yarn build

FROM node:18 AS final

WORKDIR /application

COPY --from=build /application/dist /application

COPY --from=build /application/node_modules /application/node_modules

EXPOSE 5000

CMD ["node" ,"app.js"]