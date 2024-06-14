// const bcrypt = require("bcrypt");
const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/database");

const User = sequelize.define(
  "User",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    role: {
      type: DataTypes.STRING,
      defaultValue: "customer",
    },
  }
  //   {
  //     timestamps: true,
  //     hooks: {
  //       beforeCreate: async (user) => {
  //         const salt = await bcrypt.genSalt(10);
  //         user.password = await bcrypt.hash(user.password, salt);
  //       },
  //     },
  //   }
);

sequelize
  .sync({ force: true }) // `force: true`는 기존 테이블을 삭제하고 새로 생성. 실제 배포에서는 `force: false`로 설정.
  .then(() => {
    console.log("User table created");
  })
  .catch((error) => {
    console.error("Unable to create table:", error);
  });

const createUser = async (username, password, email) => {
  try {
    const user = await User.create({ username, password, email });
    return user;
  } catch (error) {
    throw new Error("Error creating user: " + error.message);
  }
};

const findUserByUsername = async (username) => {
  try {
    const user = await User.findOne({ where: { username } });
    return user;
  } catch (error) {
    throw new Error("Error finding user: " + error.message);
  }
};

// const authenticateUser = async (username, password) => {
//   try {
//     const user = await findUserByUsername(username);
//     if (!user) {
//       throw new Error("User not found");
//     }
//     const validPassword = await bcrypt.compare(password, user.password);
//     if (!validPassword) {
//       throw new Error("Invalid password");
//     }
//     return user;
//   } catch (error) {
//     throw new Error("Authentication failed: " + error.message);
//   }
// };

module.exports = { User, createUser, findUserByUsername };
