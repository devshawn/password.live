FROM node:8-alpine as builder

COPY package.json package-lock.json ./

RUN npm install && mkdir /app && mv ./node_modules ./app

WORKDIR /app

COPY . .

RUN npm run build

FROM nginx:alpine

RUN rm -rf /usr/share/nginx/html/*

COPY --from=builder /app/dist /usr/share/nginx/html

EXPOSE 80

ENTRYPOINT ["nginx", "-g", "daemon off;"]