# Stage 0 - Build Frontend Assets
FROM node:18.16.0-alpine as build

WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Stage 1 - Serve Frontend Assets
FROM fholzer/nginx-brotli:latest

RUN apk add --no-cache gettext

WORKDIR /etc/nginx
ADD nginx.conf.template /etc/nginx/nginx.conf.template

COPY --from=build /app/build /usr/share/nginx/html

CMD ["/bin/sh", "-c", "envsubst '${PORT}' < /etc/nginx/nginx.conf.template > /etc/nginx/nginx.conf && nginx -g 'daemon off;'"]
