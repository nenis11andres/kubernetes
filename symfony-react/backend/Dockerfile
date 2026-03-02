FROM php:8.2-fpm

# Instalar dependencias
RUN apt-get update && apt-get install -y \
    git unzip libicu-dev libonig-dev libzip-dev zip \
    && docker-php-ext-install intl pdo pdo_mysql zip

# Instalar Composer
COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

WORKDIR /var/www

COPY . .

RUN composer install --no-dev --optimize-autoloader

RUN chown -R www-data:www-data /var/www/var

CMD ["php-fpm"]