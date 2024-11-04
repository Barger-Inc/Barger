FROM node:18-alpine

WORKDIR /app

COPY package.json yarn.lock ./

RUN yarn install --frozen-lockfile

COPY . .

WORKDIR /app/apps/admin-panel-frontend

RUN yarn build

CMD ["yarn", "start"]

