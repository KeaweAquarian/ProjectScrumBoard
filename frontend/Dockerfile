FROM node:18-alpine
WORKDIR /appdocker
COPY package.json ./
RUN npm install
COPY . .
CMD ["npm", "run server"]
