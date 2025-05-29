#!/bin/sh

# Cloud Run provides the PORT environment variable
# Do not override if already set, otherwise default to 8080
# Cloud Run typically sets PORT=8080 or PORT=443
export PORT

# Echo for debugging
echo "Cloud Run provided PORT: $PORT"

# Replace PORT in nginx.conf with the value from environment variable
envsubst '$PORT' < /etc/nginx/nginx.conf > /etc/nginx/nginx.conf.tmp
mv /etc/nginx/nginx.conf.tmp /etc/nginx/nginx.conf

echo "Starting nginx on PORT: $PORT"

# Start nginx
exec nginx -g 'daemon off;'
