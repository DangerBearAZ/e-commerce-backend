
// model and Data type are methods? things we are using from seq 
const { Model, DataTypes } = require('sequelize');
//this brings in our connection to seq via connections vs file in config folder 
const sequelize = require('../config/connection.js');

// create our User model
class Category extends Model {}

Category.init(
  // define columns
  {
    // defining id column
    id: {
      // use the special Sequelize DataTypes object provide what type of data it is
      type: DataTypes.INTEGER,
      // this is the equivalent of SQL's `NOT NULL` option has to be filled in 
      allowNull: false,
      // instruct that this is the Primary Key
      primaryKey: true,
      //auto increment for primary key 
      autoIncrement: true
    },
    // defining next column over "category_name"
    category_name: {
      //it is a string 
      type: DataTypes.STRING,
      //does not allow null balue
      allowNull: false,
    }
  },
  {
    // pass in our imported sequelize connection (the direct connection to our database)
    sequelize,
    // don't automatically create createdAt/updatedAt timestamp fields
    timestamps: false,
    // don't pluralize name of database table
    freezeTableName: true,
    // use underscores instead of camel-casing
    underscored: true,
      // make it so our model name stays lowercase in the database
    modelName: 'category',
  }
);

module.exports = Category;
