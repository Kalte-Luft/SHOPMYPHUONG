'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Coupon extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Coupon.init({
    code: DataTypes.STRING,
    discount_percentage: DataTypes.DECIMAL(5, 2),
    valid_from: DataTypes.DATE,
    valid_to: DataTypes.DATE,
    min_order_amount: DataTypes.DECIMAL(10, 2),
  }, {
    sequelize,
    modelName: 'Coupon',
  });
  return Coupon;
};