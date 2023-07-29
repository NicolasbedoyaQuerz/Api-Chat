const { Conversations, Participants, Messages } = require("../models");

const createConversation = async (req, res, next) => {
    try {
        const { createdBy, participants, type } = req.body;
        const conversation = await Conversations.create({ createdBy, type });

        const { id } = conversation;

        const participitantsArray = participants.map((participant) => ({
          userId: participant,
          conversationId: id,
        }));
        participitantsArray.push({ userId: createdBy, conversationId: id });
        await Participants.bulkCreate(participitantsArray)
    
    res.status(201).end();
  } catch (error) {
    next(error);
  }
};

const getAllConversationByUsers = async (req, res, next) => {
  try {
    const {createdBy} = req.params;
    const conversation = await Conversations.findByPk({
      where: { createdBy}
    });
    res.json(conversation)
  } catch (error) {
    next(error)
  }
}

const getAllConversationByParticipants = async (req, res, next) => {
  try {
    const {id} = req.params;
    const conversation = await Conversations.findAll({
      where: {id},
      include: Participants, Messages
    });
    res.json(conversation)
  } catch (error) {
    next(error)
  }
}

const createMessage = async (req, res, next) => {
  try {
    const newMessage = req.body;
    const message = await Messages.create(newMessage);

    res.status(201).json(message);
  } catch (error) {
    next(error)
  }
}


const deleteConversation = async (req, res, next) => {
  try {
    const {id} = req.params;
    await Conversations.destroy({where: {id}});
    res.status(204).end()
  } catch (error) {
    next(error)
  }
}

module.exports = {
  createConversation,
  getAllConversationByUsers,
  getAllConversationByParticipants,
  deleteConversation,
  createMessage
};
