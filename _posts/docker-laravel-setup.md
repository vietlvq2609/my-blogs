---
title: "Docker for Laravel Development: Complete Setup Guide"
excerpt: "Step-by-step guide to containerizing your Laravel application with Docker, including MySQL, Redis, and Nginx configuration for local development and production deployment."
coverImage: "/assets/blog/docker-laravel/cover.jpg"
date: "2026-02-10T09:00:00.000Z"
author:
  name: Viktok Le
  picture: "/assets/blog/authors/viktok.jpeg"
ogImage:
  url: "/assets/blog/docker-laravel/cover.jpg"
---

Docker has revolutionized the way we develop and deploy applications. In this guide, I'll walk you through setting up a complete Docker environment for Laravel development.

## Why Docker for Laravel?

Docker provides several advantages:

- **Consistent Environment**: Same setup across development, staging, and production
- **Easy Onboarding**: New developers can start quickly
- **Isolated Dependencies**: No conflicts with system packages
- **Portable**: Run anywhere Docker is installed

## Project Structure

Here's our Docker setup structure:

```
project-root/
├── docker/
│   ├── nginx/
│   │   └── default.conf
│   ├── php/
│   │   └── Dockerfile
│   └── mysql/
│       └── init.sql
├── docker-compose.yml
├── .dockerignore
└── laravel-app/
```

## Docker Compose Configuration

Create `docker-compose.yml`:

```yaml
version: '3.8'

services:
  app:
    build:
      context: ./docker/php
      dockerfile: Dockerfile
    container_name: laravel-app
    restart: unless-stopped
    working_dir: /var/www
    volumes:
      - ./:/var/www
    networks:
      - laravel

  nginx:
    image: nginx:alpine
    container_name: laravel-nginx
    restart: unless-stopped
    ports:
      - "8080:80"
    volumes:
      - ./:/var/www
      - ./docker/nginx/default.conf:/etc/nginx/conf.d/default.conf
    networks:
      - laravel
    depends_on:
      - app

  mysql:
    image: mysql:8.0
    container_name: laravel-mysql
    restart: unless-stopped
    environment:
      MYSQL_DATABASE: laravel
      MYSQL_ROOT_PASSWORD: root
      MYSQL_PASSWORD: password
      MYSQL_USER: laravel
    volumes:
      - mysql-data:/var/lib/mysql
    ports:
      - "3306:3306"
    networks:
      - laravel

  redis:
    image: redis:alpine
    container_name: laravel-redis
    restart: unless-stopped
    ports:
      - "6379:6379"
    networks:
      - laravel

networks:
  laravel:
    driver: bridge

volumes:
  mysql-data:
    driver: local
```

## PHP Dockerfile

Create `docker/php/Dockerfile`:

```dockerfile
FROM php:8.2-fpm

# Set working directory
WORKDIR /var/www

# Install system dependencies
RUN apt-get update && apt-get install -y \
    git \
    curl \
    libpng-dev \
    libonig-dev \
    libxml2-dev \
    zip \
    unzip \
    libzip-dev

# Clear cache
RUN apt-get clean && rm -rf /var/lib/apt/lists/*

# Install PHP extensions
RUN docker-php-ext-install pdo_mysql mbstring exif pcntl bcmath gd zip

# Install Redis extension
RUN pecl install redis && docker-php-ext-enable redis

# Get latest Composer
COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

# Create system user to run Composer and Artisan Commands
RUN useradd -G www-data,root -u 1000 -d /home/laravel laravel
RUN mkdir -p /home/laravel/.composer && \
    chown -R laravel:laravel /home/laravel

# Set user
USER laravel

# Expose port 9000 and start php-fpm server
EXPOSE 9000
CMD ["php-fpm"]
```

## Nginx Configuration

Create `docker/nginx/default.conf`:

```nginx
server {
    listen 80;
    index index.php index.html;
    error_log  /var/log/nginx/error.log;
    access_log /var/log/nginx/access.log;
    root /var/www/public;

    location ~ \.php$ {
        try_files $uri =404;
        fastcgi_split_path_info ^(.+\.php)(/.+)$;
        fastcgi_pass app:9000;
        fastcgi_index index.php;
        include fastcgi_params;
        fastcgi_param SCRIPT_FILENAME $document_root$fastcgi_script_name;
        fastcgi_param PATH_INFO $fastcgi_path_info;
    }

    location / {
        try_files $uri $uri/ /index.php?$query_string;
        gzip_static on;
    }
}
```

## .dockerignore

Create `.dockerignore`:

```
node_modules
vendor
.git
.env
storage/logs/*
storage/framework/cache/*
storage/framework/sessions/*
storage/framework/views/*
```

## Laravel Environment Configuration

Update your `.env` file:

```env
DB_CONNECTION=mysql
DB_HOST=mysql
DB_PORT=3306
DB_DATABASE=laravel
DB_USERNAME=laravel
DB_PASSWORD=password

REDIS_HOST=redis
REDIS_PASSWORD=null
REDIS_PORT=6379

CACHE_DRIVER=redis
SESSION_DRIVER=redis
QUEUE_CONNECTION=redis
```

## Getting Started

### 1. Build and Start Containers

```bash
docker-compose up -d --build
```

### 2. Install Laravel Dependencies

```bash
docker-compose exec app composer install
```

### 3. Generate Application Key

```bash
docker-compose exec app php artisan key:generate
```

### 4. Run Migrations

```bash
docker-compose exec app php artisan migrate
```

### 5. Access Your Application

Visit `http://localhost:8080`

## Useful Docker Commands

### Execute Commands in Container

```bash
# Run Artisan commands
docker-compose exec app php artisan migrate

# Run Composer
docker-compose exec app composer require package/name

# Access container shell
docker-compose exec app bash
```

### View Logs

```bash
# All logs
docker-compose logs

# Specific service logs
docker-compose logs app
docker-compose logs nginx
```

### Stop and Remove Containers

```bash
# Stop containers
docker-compose down

# Stop and remove volumes
docker-compose down -v
```

## Production Optimization

### Multi-Stage Build

For production, use a multi-stage build:

```dockerfile
# Build stage
FROM composer:latest as build
WORKDIR /app
COPY . /app
RUN composer install --no-dev --optimize-autoloader

# Production stage
FROM php:8.2-fpm
WORKDIR /var/www
COPY --from=build /app /var/www
RUN docker-php-ext-install pdo_mysql opcache
```

### Optimize Laravel

```bash
docker-compose exec app php artisan config:cache
docker-compose exec app php artisan route:cache
docker-compose exec app php artisan view:cache
```

## Best Practices

1. **Use .dockerignore**: Exclude unnecessary files
2. **Minimize Layers**: Combine RUN commands when possible
3. **Use Specific Tags**: Don't use `latest` in production
4. **Security**: Don't run containers as root
5. **Health Checks**: Implement container health checks
6. **Logging**: Configure proper logging drivers

## Troubleshooting

### Permission Issues

```bash
docker-compose exec app chown -R laravel:laravel /var/www/storage
docker-compose exec app chmod -R 775 /var/www/storage
```

### Clear Laravel Cache

```bash
docker-compose exec app php artisan cache:clear
docker-compose exec app php artisan config:clear
docker-compose exec app php artisan view:clear
```

## Conclusion

Docker significantly simplifies Laravel development and deployment. With this setup, you have a complete, portable development environment that mirrors production.

The initial setup might seem complex, but the long-term benefits of consistency, portability, and ease of onboarding make it worthwhile.

Happy Dockerizing! 🐳
