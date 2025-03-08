#!/bin/bash
set -e

APP_NAME=${APP_NAME:-"Muhammed Arslan"}
CARD_TITLE=${CARD_TITLE:-"Coming Soon"}
CARD_DESCRIPTION=${CARD_DESCRIPTION:-"Something extraordinary is being worked on."}
INSTAGRAM_URL=${INSTAGRAM_URL:-"https://instagram.com/muharsln"}
X_URL=${X_URL:-"https://x.com/muharsln"}
YOUTUBE_URL=${YOUTUBE_URL:-"https://youtube.com/muharsln"}

cat > /usr/share/nginx/html/config/config.json <<EOL
{
    "APP_NAME": "$APP_NAME",
    "CARD_TITLE": "$CARD_TITLE",
    "CARD_DESCRIPTION": "$CARD_DESCRIPTION",
    "INSTAGRAM_URL": "$INSTAGRAM_URL",
    "X_URL": "$X_URL",
    "YOUTUBE_URL": "$YOUTUBE_URL"
}
EOL

echo "Configuration file created with custom values"

exec "$@"