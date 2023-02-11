"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class attendance extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  attendance.init(
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      name: {
        type: DataTypes.STRING,
      },
      attendanceStatus: {
        type: DataTypes.ENUM,
        values: ["ABSENT", "PRESENT", "MORNING HALF", "EVENING HALF"],
      },
      workingHours: {
        type: DataTypes.INTEGER,
      },
      workingFrom: {
        type: DataTypes.ENUM,
        values: ["OFFICE", "HOME"],
      },
    },
    {
      sequelize,
      modelName: "attendance",
    }
  );
  return attendance;
};
