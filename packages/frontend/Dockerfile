FROM node:lts-alpine

WORKDIR /usr/src/app

COPY package.json ./

RUN yarn install --no-lockfile

COPY /public ./public
COPY tsconfig.json .
COPY /src ./src

RUN yarn build
RUN yarn global add serve
RUN rm -rf node_modules/ src/ tsconfig.json package.json

COPY entrypoint.sh ./

EXPOSE 3000

ENTRYPOINT [ "./entrypoint.sh" ]