FROM node:10.15.3-stretch

ARG NODE_ENV=production
ENV NODE_ENV $NODE_ENV

ARG PORT=3000
ENV PORT $PORT
EXPOSE $PORT

RUN apt-get update

WORKDIR /tmp
COPY yarn.lock .
COPY package.json .

RUN yarn install --production --silent --ignore-engines \
  && mkdir /app \
  && mv /tmp/node_modules /app \
  && yarn cache clean --force

WORKDIR /app

COPY . .

CMD [ "node", "/app/bin/www" ]
