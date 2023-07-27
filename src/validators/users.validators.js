const { check } = require('express-validator');
const validateResult = require('../middlewares/validate.middleware');



const loginUserValidator = [
  check('email', 'Error con el email')
  .exists()
  .withMessage('Debes poner un correo')
  .notEmpty()
  .withMessage('El correo no Puede estar vacio')
  .isString()
  .withMessage('El correo no es un string')
  .isEmail()
  .withMessage('El correo no tiene caracteristicas de un email'),
  check('password', 'Error con el password')
  .exists()
  .notEmpty()
  .isString(),
  validateResult
];

const registerUserValidator = [
    check('username', 'error con el usuario')
    .exists()
    .withMessage('Debes poner un usuario')
    .notEmpty()
    .withMessage('El usuario no Puede estar vacio')
    .isString()
    .withMessage('El usuario no es un string')
    .isLength({min: 4, max: 30})
    .withMessage('el usuario debe tener minimo 4 caracteres y maximo 30'),
    check('email', 'Error con el email')
    .exists()
    .withMessage('Debes poner un correo')
    .notEmpty()
    .withMessage('El correo no Puede estar vacio')
    .isString()
    .withMessage('El correo no es un string')
    .isEmail()
    .withMessage('El correo no tiene caracteristicas de un email')
    .isLength({min: 8, max: 50})
    .withMessage('el correo debe tener minimo 8 caracteres y maximo 50'),
    check('password', 'Error con el password')
    .exists()
    .withMessage('Debes poner un password')
    .notEmpty()
    .withMessage('El password no Puede estar vacio')
    .isString()
    .withMessage('El password no es un string')
    .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$.+%^&*])[A-Za-z\d!@#.+$%^&*]{8,}$/)
    .withMessage('la contraseña debe tener minimo 6 caracteres una mayuscula, una minuscula, un numero y un caracter especial '),
    validateResult
    
];

module.exports = {
    loginUserValidator,
    registerUserValidator,
};