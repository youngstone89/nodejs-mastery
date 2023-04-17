FROM node:16 AS live-agent-adapter
WORKDIR /usr/src/app
RUN mkdir logs
RUN chown -R node /usr/src/app
COPY package.json package-lock.json app.js ./
RUN npm install
USER node
CMD [ "npm", "run", "start" ]
