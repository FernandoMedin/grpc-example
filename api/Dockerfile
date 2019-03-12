FROM node:8.15

RUN mkdir /app/
WORKDIR /app/

COPY . .

RUN npm install

EXPOSE 4100

CMD ["node", "app.js"]
