const Sequelize = require("sequelize");

module.exports = class User extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        email: {
          type: Sequelize.STRING(40),
          allowNull: true,
          unique: true,
        },
        password: {
          type: Sequelize.STRING(100),
          allowNull: true,
        },
      },
      {
        sequelize,
        timestamps: true,
        underscored: false,
        modelName: "User",
        tableName: "users",
        paranoid: true,
        charset: "utf8",
        collate: "utf8_general_ci",
      }
    );
  }

  // static associate(db) {
  //     db.User.hasMany(db.Post);
  //     db.User.belongsToMany(db.User, {
  //         foreignKey: 'followingId',
  //         as: 'Followers',
  //         through: 'Follow',
  //     });
  //     db.User.belongsToMany(db.User, {
  //         foreignKey: 'followerId',
  //         as: 'Followings',
  //         through: 'Follow',
  //     });
  // }
};