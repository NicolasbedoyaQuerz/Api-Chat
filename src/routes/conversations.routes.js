const { Router } = require('express');
const { createConversation, getAllConversationByUsers, getAllConversationByParticipants, deleteConversation, createMessage } = require('../controllers/conversations.controllers');
const authenticate = require("../middlewares/auth.middleware");
const { conversationValidator, messageValidator } = require('../validators/conversations.validators');


const router = Router();

router.post('/conversations',authenticate, conversationValidator, createConversation);
router.get('/conversations/:id',authenticate,  getAllConversationByUsers);
router.get('/conversations/participants/:id',authenticate, getAllConversationByParticipants)
router.delete('/conversations/:id', authenticate, deleteConversation);
router.post('/message',authenticate, messageValidator, createMessage);

module.exports = router;