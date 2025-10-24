FROM node:latest

WORKDIR /desafio02

COPY package*.json ./

# Precaução, em caso de haver
RUN [! -d "node_modules"] || rm -rf node_modules

RUN npm install

COPY . .

CMD ["npm", "start"]

EXPOSE 3000