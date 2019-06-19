This is Spring-Boot/Vue restful demo project built with Vue CLI3, Vuetify, Vuex, Hibernate and H2 embedded database. Contains functionality for creating, editing, deleting and sorting tickets.

Run backend:

In terminal
cd ticket/backend
mvn clean install
mvn spring-boot:run
Backend runs on http://localhost:8088/


Run frontend (For that Node.js should be installed):

In terminal 
cd ticket/frontend
npm install > installs all dependencies frontend needs to serve the app
In the same directive type
npm run serve
Frontend runs on http://localhost:8080/
