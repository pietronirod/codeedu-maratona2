FROM node:14.1-alpine

WORKDIR /usr/local/app
COPY package.json ./
RUN npm install

COPY index.js ./
COPY ./src ./src

EXPOSE 3000
CMD ["npm", "start"]