FROM node

WORKDIR /yourapp

COPY ./package.json /yourapp/

RUN npm install
#creating a src folder on the current location in container
RUN mkdir ./src

COPY ./src/ /yourapp/src/

EXPOSE 3000

CMD [ "node","./src/app1.js" ]