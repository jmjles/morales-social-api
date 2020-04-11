const route = require("express").Router();
const { validationResult } = require("express-validator");

const { checkLogin, checkRegister } = require("./formAuth");
route.post("/login", checkLogin, (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json(errors);
    }
    res.status(200).send("Logged in");
  } catch (er) {
    console.log(er);
  }
});

route.post("/register", checkRegister, (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json(errors);
    }
    res.status(200).send("Registered");
  } catch (er) {
    console.log(er);
  }
});
module.exports = route;
