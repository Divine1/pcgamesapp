FROM node:12.22-alpine3.14
RUN mkdir -p /app
COPY . /app
WORKDIR /app

CMD ["node","server.js"]