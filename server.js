// you left off making routs for get one prodcut 
const express = require('express');
// what is this? below 
// const { Sequelize } = require('sequelize/types');
const routes = require('./routes');
const path = require('path');
// import sequelize connection from the config folder connection file 
const sequelize = require('./config/connection');



const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

// sync sequelize models to the database, then turn on the server
// force false IF changed to "true"  would drop and recreate all database tables on startup for when we make changes to the Sequelize models

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});

module.exports = sequelize;