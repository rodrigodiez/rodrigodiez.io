FROM node:6.9.5-alpine

COPY . /usr/src/app
WORKDIR /usr/src/app

RUN npm install
RUN npm run build

CMD ["npm","run","serve"]
