FROM node:22-alpine

WORKDIR /app

COPY package.json .
COPY yarn.lock .
COPY turbo.json .

COPY apps/admin-panel-frontend/package.json ./apps/admin-panel-frontend/
COPY packages/api/package.json ./packages/api/
COPY packages/ui/package.json ./packages/ui/
COPY packages/typescript-config/package.json ./packages/typescript-config/

RUN yarn install --frozen-lockfile

COPY . .

WORKDIR /app/apps/admin-panel-frontend

RUN yarn build

CMD ["yarn", "start"]

