FROM node:14.21.3-alpine

WORKDIR /app

COPY . .

RUN npm install

CMD ["npm", "start"]
