# Overview

connect is a nextjs based React application using api as the backend gateway. It's responsability is authentication only before handing off to another UI.

Use to access the administration portal of simpatico

### Requirements

Install Node 12.13.1

For nvm users, just move to the project directory and run :
```
    nvm i
```
If you already have installed Node 10.16.0 before, just type:
```
    nvm use
```
## Run it
```
npm run start:dev
or
npm run start:prod
```

You can find the auto generated swagger documentation by default with http://localhost:6000/doc

### Testing

You can import the postman collection file simpatico.postman_collection.json in order to test the public facing APIs
