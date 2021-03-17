# CyTick
Trying to implement trick shown in [this blog post](https://filiphric.com/make-your-cypress-tests-faster-with-clock). It tries to use cy.tick() to move forward in time in test to speed tests up. Problem is cy.tick() is not advancing time in an angular application using [rxjs interval](https://angular.io/guide/rx-library) to shoot off http requests to REST API backend.
## Server
The folder *server* contains dummy server that host REST API endpoint for PingService in angular app to call.
Start it with command
```
cd server
npm install
node hello-world.js
```
## Frontend
``` 
npm install
ng serve -o 
```
## Cypress
Start Cypress tests with
```
npx cypress open
```
