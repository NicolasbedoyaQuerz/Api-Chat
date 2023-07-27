const jwt = require('jsonwebtoken');

const authenticate = (req, res, next) => {
    try {
        const token = req.headers.authorization.split(" ")[1];
        if(!token){
            return next({ status: 401, errorName: 'no token', error: 'no token present in headers'})
        }
    
        console.log(token);
        const decoded = jwt.verify(token, process.env.JWT_SECRET, {
            algorithms: 'HS512'
        });

        req.user = decoded;

        next();

    } catch (error) {
        next({ status: 498, errorName: 'invalid token', error: ''})
      }
  
  };
  
  module.exports = authenticate;
  