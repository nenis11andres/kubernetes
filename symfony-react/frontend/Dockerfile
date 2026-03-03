# Build de React
FROM node:20 AS build
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build

# Nginx sirve los estáticos
FROM nginx:alpine
COPY --from=build /app/build /usr/share/nginx/html

# Configuración de nginx para servir React y enrutar /api a Symfony
COPY nginx-react.conf /etc/nginx/conf.d/default.conf