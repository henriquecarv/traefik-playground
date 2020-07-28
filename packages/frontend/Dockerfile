FROM node:lts-alpine

ARG PORT
ENV PORT $PORT

WORKDIR /app

COPY package.json ./

RUN yarn install --no-lockfile

COPY /public ./public
COPY tsconfig.json .
COPY /src ./src

RUN yarn build
RUN yarn global add serve
RUN rm -rf node_modules/ src/ tsconfig.json package.json

COPY entrypoint.sh ./

EXPOSE $PORT

ENTRYPOINT [ "./entrypoint.sh" ]