const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class ProductTag extends Model {}

ProductTag.init(
  {
    // define columns
    id: {
      //integer
      type: DataTypes.INTEGER,
      //Doent allow null values
      allowNull: false,
      ///Set as primary key
      primaryKey: true,
      //Uses auto increment
      autoIncrement: true,
    },
    product_id: {
      //Integer
      type: DataTypes.INTEGER,
      //References the product models id
      references: {
        model: 'product',
        key: 'id'
      },
    },
    tag_id: {
      //Integer
      type:DataTypes.INTEGER,
      //References the tag models is
      references: {
        model: 'tag',
        key: 'id'
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product_tag',
  }
);

module.exports = ProductTag;
