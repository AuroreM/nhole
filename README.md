## Nhole

This app helps you to send SMS to groups of people gathered by their available time slots.
To use it, you have to have an Android phone and the [SMS Gateway Me](https://smsgateway.me/) app installed.

****

## Disclaimer

For now, if you wan to use it, you can only use it on one phone and you have to change the login in the `common/models/clients.js` file. Feature to fix this is planned ;)

## Requirements

Make sure you have installed : 
 * node (>6)
 * yarn
 * docker
 * db-migrate

## Installation

* Run `yarn` to install packages
* Run `docker run --rm -p 5432:5432 --name nholedb -e POSTGRES_PASSWORD=pswd -e POSTGRES_USER=aurorem -d postgres` to create the database docker container
* Run `docker exec -it nholedb psql -U aurorem` to access the container
* Create the nholedb database and the client table :
  ```
  CREATE DATABASE nholedb;
  \connect nholedb;
  CREATE TABLE client (
    firstname varchar(40),
    lastname varchar(40),
    number varchar(40),
    morning boolean,
    lunch boolean,
    afternoon boolean,
    evening boolean,
    id bigserial
  );
  CREATE TABLE message (
    id bigserial,
    status varchar(40),
    sentDate TIMESTAMP WITH TIME ZONE,
    clientId bigserial
  );
  ```
* Exit the container : `\q`

## Development

### Server
* Run `node .` in the root folder of the app.

### Front
* Run `npm run start` in the `client` folder.
* First add some clients to fill in the database.