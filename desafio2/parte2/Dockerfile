FROM node:10-slim

USER node

RUN mkdir -p /home/node/app

WORKDIR /home/node/app

COPY --chown=node package*.json ./

RUN npm install

COPY --chown=node ./dist ./dist

COPY --chown=node database.sqlite ./

CMD ["npm", "run", "start:prod"]

