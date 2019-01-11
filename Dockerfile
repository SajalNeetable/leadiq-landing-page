FROM node:8.11.0
WORKDIR /app
COPY LeadIQ/ .
RUN npm install
RUN npm run build
EXPOSE 3000
CMD ["npm","run","dev"]