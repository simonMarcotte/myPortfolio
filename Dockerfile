# Stage 0 - Build Frontend Assets
FROM node:18.16.0-alpine as build

WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Stage 1 - Serve Frontend Assets
FROM nginx:alpine

# Install envsubst
RUN apk add --no-cache gettext

WORKDIR /etc/nginx
ADD nginx.conf /etc/nginx/nginx.conf

COPY --from=build /app/build /usr/share/nginx/html

# Copy entrypoint script
COPY docker-entrypoint.sh /
RUN chmod +x /docker-entrypoint.sh

# Expose both common ports, but actual port will be determined by the PORT env var
EXPOSE 80 443

# Use entrypoint script that handles the PORT env variable
ENTRYPOINT ["/docker-entrypoint.sh"]