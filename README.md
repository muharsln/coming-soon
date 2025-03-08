# ComingSoon - Angular Project

A minimalist "Coming Soon" page built with Angular that's easily customizable and ready to deploy.

## Features

- Lightweight and fast
- Customizable text and social media links
- Ready for Docker deployment
- Compatible with both `docker run` and `docker-compose`

## Screenshot

![Coming Soon Page Screenshot](https://github.com/muharsln/coming-soon/tree/main/public/screen/screenshot.png)

## Development

Start a local development server:

```bash
ng serve
```

View your site at `http://localhost:4200/`. Changes to source files will automatically reload the application.

## Deployment Options

### Docker

Deploy with a single command:

```bash
docker run -d --name coming-soon -p 7002:7002 \
-e APP_NAME="Title Field" \
-e CARD_TITLE="Coming Soon" \
-e CARD_DESCRIPTION="Something extraordinary is being worked on." \
-e INSTAGRAM_URL="https://instagram.com" \
-e X_URL="https://x.com" \
-e YOUTUBE_URL="https://youtube.com" \
muharsln/coming-soon
```

### Docker Compose

For easier management:

```yaml
version: '3.8'
services:
  angular-app:
    image: muharsln/coming-soon
    container_name: coming-soon
    ports:
      - "7002:7002"
    environment:
      APP_NAME: "Title Field"
      CARD_TITLE: "Coming Soon"
      CARD_DESCRIPTION: "Something extraordinary is being worked on."
      INSTAGRAM_URL: "https://instagram.com"
      X_URL: "https://x.com"
      YOUTUBE_URL: "https://youtube.com"
    restart: unless-stopped
```

## Customization

Modify these environment variables to customize your page:

| Variable | Purpose |
|----------|---------|
| `APP_NAME` | Page title |
| `CARD_TITLE` | Main heading |
| `CARD_DESCRIPTION` | Short description |
| `INSTAGRAM_URL` | Instagram link |
| `X_URL` | Twitter/X link |
| `YOUTUBE_URL` | YouTube link |

## Angular CLI Commands

Build the project:
```bash
ng build
```

Generate new components:
```bash
ng generate component component-name
```

## Resources

- Project image: [Docker Hub](https://hub.docker.com/r/muharsln/coming-soon)
- License: MIT

---

Create anticipation for your upcoming project with this simple, customizable landing page!