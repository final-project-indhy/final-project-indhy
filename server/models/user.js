'use strict';
const {
  Model
} = require('sequelize');

const { hashPassword } = require('../helpers/bcrypt');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.hasMany(models.History, {foreignKey: "userId"})
    }
  }
  User.init({
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: { msg: "Username cannot be null" },
        notEmpty: { msg: "Username cannot be empty" },
      }
    },
    email: {
      type: DataTypes.STRING,
      unique: {
        args: true,
        msg: "The email has been used, please use another email!"
      },
      allowNull: false,
      validate: {
        notNull: { msg: "Email cannot be null" },
        notEmpty: { msg: "Email cannot be empty" },
        isEmail: { msg: "Input format must be email" }
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: { msg: "Password cannot be null" },
        notEmpty: { msg: "Password cannot be empty" },
        len: {
          args: [ 5, 30 ],
          msg: "Password length minimum 5"
        }
      }
    }
  }, {
    sequelize,
    modelName: 'User',
    hooks: {
      beforeCreate: (instances, options) => {
        instances.password = hashPassword(instances.password)
      }
    }
  });
  return User;
};