const { Router } = require("express");
const { createUser, loginUser } = require("../controllers/users.controllers");
const { loginUserValidator, registerUserValidator} = require('../validators/users.validators');
const authenticate = require("../middlewares/auth.middleware");

const router = Router();

router.post("/users",registerUserValidator, createUser);

router.post("/login", loginUserValidator, loginUser);

router.get("/users", authenticate, (req, res) => {
    res.send("users");
  });
  
module.exports = router;
