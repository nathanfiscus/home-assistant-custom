FROM node:alpine

RUN apk add --update python

COPY package.json /tmp/package.json
RUN cd /tmp && npm install
RUN mkdir -p /src/app && cp -a /tmp/node_modules /src/app/

WORKDIR /src/app
COPY . /src/app

RUN npm run docker:build

EXPOSE 4000

CMD ["npm", "run", "open:prod"]
