FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
COPY medusa-config.ts ./
COPY tsconfig.json ./
COPY src/ src/

RUN npm install
RUN npm run build

EXPOSE 9000

CMD npm run seed && npm run seed:admin && npm start
