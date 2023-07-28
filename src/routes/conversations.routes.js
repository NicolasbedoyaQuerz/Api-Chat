const { Router } = require('express');
const { createConversation } = require('../controllers/conversations.controllers');
const authenticate = require("../middlewares/auth.middleware");


const router = Router();

router.post('/conversations', createConversation);

module.exports = router;