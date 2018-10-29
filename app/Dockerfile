FROM node:10-alpine

WORKDIR /app

COPY package.json yarn.lock server/index.js /app/

COPY build/ build/

RUN yarn install

EXPOSE 3000

CMD ["yarn", "start"]