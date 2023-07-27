const {Users} = require('../models');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const createUser = async (req, res, next) => {
    try {
      const { email, password, username } = req.body;
  
      const hashed = await bcrypt.hash(password, 10);
      await Users.create({ username, email, password: hashed });
      res.status(201).end();
    } catch (error) {
      next(error);
    }
  };

  const loginUser = async (req, res, next) => {
    try {
      const { email, password } = req.body;
  
      const user = await Users.findOne({ where: { email } });
  
 
      if (!user) {
        return next({ status: 400, errorName: 'invalid credentials', error: 'incorrect email / password'})
      }
  
      const validPassword = await bcrypt.compare(password, user.password);
  
      if (!validPassword) {
        return next({ status: 400, errorName: 'invalid credentials', error: 'incorrect email / password'})
      }
  
  
      const {id, username, firstname, lastname, profileImage, validEmail, createdAt, updatedAt} = user;
  
      const token = jwt.sign(
        {username, email, firstname, lastname},
        process.env.JWT_SECRET,
        { algorithm: 'HS512', expiresIn: '10m'}
      );
  
      res.json({id, username, email, firstname, lastname, profileImage, validEmail, createdAt, updatedAt, token});
    } catch (error) {
      next(error);
    }
  };
  



  
module.exports = {
   createUser,
   loginUser,
}