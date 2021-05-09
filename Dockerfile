FROM node:14-alpine

RUN mkdir -p /opt/app
WORKDIR /opt/app
RUN adduser -S app

COPY package*.json ./

RUN npm install
# If you are building your code for production
# RUN npm ci --only=production

COPY . .

RUN chown -R app /opt/app

USER app

EXPOSE 8080

CMD [ "npm", "run", "pm2" ]
