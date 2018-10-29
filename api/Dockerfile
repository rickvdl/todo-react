FROM node:10-alpine

WORKDIR /app

COPY package.json yarn.lock /app/

COPY /dist /app

RUN yarn install

EXPOSE 3001

CMD ["yarn", "start"]