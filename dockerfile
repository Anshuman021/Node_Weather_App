FROM node
#creating my own directory insdie container
WORKDIR /yourapp

COPY ./package.json /yourapp/

RUN npm install
#creating a src folder on the current location in container
RUN mkdir ./src
#Copied the remaining data
COPY ./src/ /yourapp/src/
#exposing to 3000
EXPOSE 3000
#passing the commands to container
CMD [ "node","./src/app1.js" ]