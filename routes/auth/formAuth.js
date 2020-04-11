const {check} = require('express-validator')

exports.checkLogin = [
  check("username", `Field: 'username', is required`).isString(),
  check("password", `Field: 'password', is required`).isString()
];

exports.checkRegister = [
  check("username", `Field: 'username', is required`).isString(),
  check("password", `Field: 'password', is required`).isString(),
  check("first_name", `Field: 'first_name', is required`).isString(),
  check("last_name", `Field: 'last_name', is required`).isString(),
  check("email", `Field: 'email', is required`).isEmail(),
  check("birthdate", `Field: 'birthdate', is required`).isString()
];