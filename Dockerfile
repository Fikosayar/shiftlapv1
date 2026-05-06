# Stage 1: Build
FROM node:20-alpine AS build

WORKDIR /app

# Sadece gerekli dosyaları kopyala
COPY package*.json ./

# Cache temizliği ve temiz kurulum
RUN npm install

COPY . .
RUN npm run build

# Stage 2: Serve
FROM nginx:stable-alpine

# Nginx ayarları
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Dosyaları kopyala
COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
