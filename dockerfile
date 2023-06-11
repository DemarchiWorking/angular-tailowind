FROM node:latest as node
WORKDIR /app
COPY . . 
RUN npm install
RUN npm i @angular/cli@15.2.0
RUN npm i primeng@15.2.0
RUN npm run build --prod

FROM nginx:alpine
COPY --from=node /app/dist/demarchifront /usr/share/nginx/html