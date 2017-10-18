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
  CREATE TABLE "user" (
    id BIGSERIAL PRIMARY KEY,
    type VARCHAR(20),
    name VARCHAR(100),
    realm VARCHAR(255),
    username VARCHAR(20),
    email VARCHAR(50),
    password VARCHAR(255),
    credentials TEXT,
    verificationtoken VARCHAR(255),
    emailverified BOOLEAN,
    status VARCHAR(20),
    created TIMESTAMP WITH TIME ZONE,
    lastupdated TIMESTAMP WITH TIME ZONE,
    createdat TIMESTAMP WITH TIME ZONE,
    updatedat TIMESTAMP WITH TIME ZONE,
    smsgatewayemail VARCHAR(50),
    smsgatewaypassword VARCHAR(255),
    smsgatewaydeviceid VARCHAR(5)
  );
  CREATE TABLE client (
    firstname VARCHAR(40),
    lastname VARCHAR(40),
    number VARCHAR(40),
    morning BOOLEAN,
    lunch BOOLEAN,
    afternoon BOOLEAN,
    evening BOOLEAN,
    id BIGSERIAL,
    userId BIGSERIAL REFERENCES "user"(id)
  );
  CREATE TABLE accesstoken (
    id VARCHAR(255) PRIMARY KEY,
    ttl INTEGER,
    created TIMESTAMP WITH TIME ZONE,
    userid SERIAL REFERENCES "user"(id),
    scopes VARCHAR(255) ARRAY
  );
  CREATE TABLE acl (
    id SERIAL PRIMARY KEY,
    model VARCHAR(255),
    property VARCHAR(255),
    accesstype VARCHAR(255),
    permission VARCHAR(255),
    principaltype VARCHAR(255),
    principalid VARCHAR(255)
);
  CREATE TABLE role (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    description VARCHAR(255),
    created TIMESTAMP WITH TIME ZONE,
    modified TIMESTAMP WITH TIME ZONE
);
  CREATE TABLE rolemapping (
    id SERIAL PRIMARY KEY,
    principaltype VARCHAR(255),
    principalid VARCHAR(255),
    roleid INTEGER REFERENCES role(id)
);
  ```
* Exit the container : `\q`

## Development

### Server
* Run `node .` in the root folder of the app.

### Front
* Run `npm run start` in the `client` folder.
* First add some clients to fill in the database.