FROM node:lts-alpine as build

WORKDIR /app

COPY package.json ./

RUN yarn install --no-lockfile

COPY /src ./src
COPY tsconfig*.json ./

RUN yarn build


FROM node:lts-alpine

ARG PORT
ENV PORT $PORT

WORKDIR /app

COPY package.json ./

RUN yarn install --no-lockfile --prod

COPY tsconfig*.json ./
COPY nest-cli.json ./
COPY --from=build /app/dist ./dist

EXPOSE $PORT

CMD [ "yarn", "start:prod" ]
