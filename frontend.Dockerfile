FROM node:22-alpine

WORKDIR /app

RUN npm install -g yarn

COPY package.json yarn.lock ./

RUN yarn install --frozen-lockfile

COPY . .

WORKDIR /app/apps/admin-panel-frontend

RUN yarn build

CMD ["yarn", "start"]

