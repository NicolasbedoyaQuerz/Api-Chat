const { check } = require('express-validator');
const validateResult = require('../middlewares/validate.middleware');


const conversationValidator = [
    check('createdBy', 'error al crear la conversacion')
    .exists()
    .withMessage('debes crear una conversacion')
    .notEmpty()
    .withMessage('la conversacion no puede estar vacia'),
    check('participants', 'error en los participantes')
    .exists()
    .withMessage('debes poner un participante existente')
    .notEmpty()
    .withMessage('no puedes crear una conversacion sin otro participante'),
    validateResult
  ];

module.exports = {
    conversationValidator
}