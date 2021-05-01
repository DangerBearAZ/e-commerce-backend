// import important parts of sequelize library
const { Model, DataTypes } = require('sequelize');
// import our database connection from config.js
const sequelize = require('../config/connection');

// Initialize Product model (table) by extending off Sequelize's Model class
class Product extends Model {}

// set up fields and rules for Product model
Product.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true

    },
    product_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    price: {
      //This might only allow a decimal try adding (10, 2) if this happens 
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
      // this is validating the value is a decimal 
      validate: {
        // isDecimal: true, (might be decimal only)
        isFloat: true
      }
    },
    stock: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 10,
      validate: {
        isNumeric: true
      }
    },
    category_id: {
      type: DataTypes.INTEGER,
      // linking the prodcut to a catagory with the id - id is the key 
      references: {
        model: 'category',
        key: 'id'
      }
    }
    
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product',
  }
);

module.exports = Product;
