FROM node:22-alpine

WORKDIR /app

COPY package.json yarn.lock ./

RUN yarn install --frozen-lockfile

COPY . .

WORKDIR /app/apps/admin-panel-frontend

RUN npx next build

CMD ["yarn", "start"]

