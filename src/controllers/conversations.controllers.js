const { Conversations, Participants } = require("../models");

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

module.exports = {
  createConversation,
};
