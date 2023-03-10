"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Roles extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Roles.init(
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      role: {
        type: DataTypes.ENUM,
        values: ["SUPER ADMIN", "ADMIN", "CLIENT"],
      },
      level: {
        type: DataTypes.INTEGER,
      },
      actions: { type: DataTypes.STRING },
    },
    {
      sequelize,
      modelName: "Roles",
    }
  );
  return Roles;
};
