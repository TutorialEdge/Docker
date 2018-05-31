FROM node:10.3.0-alpine
WORKDIR /app
COPY package.json /app/package.json
RUN npm install
COPY . /app
RUN node -v
RUN ls
RUN pwd
RUN yarn run build
CMD yarn run watch