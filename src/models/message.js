'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Message extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Message.belongsTo(models.Users, { foreignKey: "senderId" });
      Message.belongsTo(models.Conversation, {
        foreignKey: "conversationId",
      });
    }
  }
  Message.init({
    conversationId: DataTypes.INTEGER,
    content: DataTypes.TEXT,
    senderId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Message',
  });
  return Message;
};