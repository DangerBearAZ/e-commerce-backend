const express = require('express');
const { Sequelize } = require('sequelize/types');
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
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
});

module.exports = sequelize;