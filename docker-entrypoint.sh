#!/bin/sh

# Cloud Run provides the PORT environment variable
# Do not override if already set, otherwise default to 8080
: ${PORT:=8080}
export PORT

# Replace PORT in nginx.conf with the value from environment variable
envsubst '$PORT' < /etc/nginx/nginx.conf > /etc/nginx/nginx.conf.tmp
mv /etc/nginx/nginx.conf.tmp /etc/nginx/nginx.conf

# Echo for debugging
echo "Starting nginx on PORT: $PORT"

# Start nginx
exec nginx -g 'daemon off;'
