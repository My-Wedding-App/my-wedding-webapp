FROM node:16.17-alpine3.15 as builder

WORKDIR /app

# assumes project has been build by executing yarn build before create the docker image
COPY package.json ./
COPY yarn.lock ./
COPY ./public ./public/

RUN yarn install
CMD ["yarn", "start"]