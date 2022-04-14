# To Do App

A simple to do app using React

# Intalation

## Dependencies

To run this project you need to install the dependencies using the following commands:

### Api

```
    cd api
```

```
    npm install
```

### Client

```
    cd client
```

```
    npm install
```

## Database

Other important information about the database is that it is a MongoDB database. To use the project you need to create a `nosql` database in [MongoDB Cloud](https://cloud.mongodb.com/) and provide the connection string to the `.env` file. The connection string is in the following format:

```
    mongodb+srv://<username>:<password>@<cluster-name>.mongodb.net/<database-name>?retryWrites=true&w=majority
```

## JWT

To use the project and generate the access token you need to create a `JWT` secret key and provide the key to the `.env` file.

# Running The Project

To start the project you need to run the following commands:

## Api

```
    npm start
```

## Client

```
    npm run dev
```
