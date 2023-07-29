const { Router } = require('express');
const { createConversation, getAllConversationByUsers, getAllConversationByParticipants, deleteConversation } = require('../controllers/conversations.controllers');
const authenticate = require("../middlewares/auth.middleware");
const { conversationValidator } = require('../validators/conversations.validators');


const router = Router();

router.post('/conversations', conversationValidator, createConversation);
router.get('/conversations',  getAllConversationByUsers);
router.get('/conversations/:id', getAllConversationByParticipants)
router.delete('/conversations/:id', deleteConversation);

module.exports = router;