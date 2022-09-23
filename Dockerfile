FROM node:alpine

WORKDIR /opt/app
COPY package*.json ./
RUN node --version && npm --version
RUN npm ci

COPY . .
RUN npm run build

EXPOSE 3000
CMD npm start
