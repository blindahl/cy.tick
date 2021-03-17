# CyTick
Show how cy.tick() not advancing time in angular application using rxjs interval to shoot of http request to REST API backend.
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