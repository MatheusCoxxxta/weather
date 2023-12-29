FROM node:20.0-alpine

WORKDIR /opt/app

COPY . .

RUN yarn

RUN yarn build

EXPOSE 3334

CMD ["yarn", "start"]