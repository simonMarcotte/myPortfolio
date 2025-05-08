# 1) Build your React app
FROM node:18.16.0-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

# 2) Serve static via official nginx
FROM nginx:stable-alpine
# bring in envsubst
RUN apk add --no-cache gettext

#copy nginx config
COPY nginx.conf.template /etc/nginx/nginx.conf.template
COPY --from=build /app/build /usr/share/nginx/html

# at runtime, substitute $PORT -> nginx.conf -> start nginx
CMD ["/bin/sh","-c",\
  "envsubst '${PORT}' < /etc/nginx/nginx.conf.template \
    > /etc/nginx/nginx.conf && nginx -g 'daemon off;'"]
