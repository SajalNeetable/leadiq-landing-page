FROM node:8.11.0 as builder
WORKDIR /app
ENV NODE_ENV=production
COPY . .
RUN npm install
RUN npm run build

FROM nginx:1.15.8
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/build /usr/share/nginx/html