FROM node:lts-alpine
WORKDIR /usr/src/app
COPY bGames-UserManagementService/package*.json ./
RUN npm install
COPY bGames-UserManagementService ./
RUN ls -l
CMD ["npm", "run", "prod"]