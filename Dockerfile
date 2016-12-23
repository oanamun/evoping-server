FROM node:6.3
RUN mkdir /app
RUN npm install pm2 -g
WORKDIR /app
COPY . /app
RUN npm install --only=production

EXPOSE 3000
#COPY ./docker/after.sh after.sh
ENTRYPOINT ["/app/after.sh"]

