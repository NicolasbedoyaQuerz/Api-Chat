'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Conversation extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Conversation.hasMany(models.Message, {foreignKey: 'conversationId'});
      Conversation.hasMany(models.Participants, {foreignKey: 'conversationId'});
      Conversation.belongsTo(models.Users, {foreignKey: 'createdBy'});
    }
  }
  Conversation.init({
    title: DataTypes.STRING,
    createBy: DataTypes.INTEGER,
    conversationImage: DataTypes.STRING,
    type: DataTypes.ENUM('single', 'group')
  }, {
    sequelize,
    modelName: 'Conversation',
  });
  return Conversation;
};