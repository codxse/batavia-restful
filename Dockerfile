FROM node:6.1.0

MAINTAINER github@codxse

ENV NODE_ENV=production
ENV PORT=8000

COPY . /var/www
WORKDIR /var/www

RUN npm install gulp -g
RUN npm install express -g
RUN npm install


EXPOSE $PORT

ENTRYPOINT ["npm", "start"]
