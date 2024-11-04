FROM node:22-alpine

WORKDIR /app

COPY package.json yarn.lock ./

RUN yarn install

COPY . .

WORKDIR /app/apps/admin-panel-frontend

RUN yarn build

CMD ["yarn", "start"]

