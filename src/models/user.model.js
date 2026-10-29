import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";

const User = sequelize.define("User", {
  username: {
    type: DataTypes.STRING,
    allowNull: true
  },

  email: {
    type: DataTypes.STRING,
    allowNull: true
  },

  password: {
    type: DataTypes.STRING,
    allowNull: true
  }
});

export default User;