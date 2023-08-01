const jwt = require('jsonwebtoken');

const secret = 'myCat';
const playload = {
  sub: 1,
  role: 'customer'
}

function signToken(plaload, secret) {
  return jwt.sign(playload, secret);
}

const token = signToken(playload, secret);
console.log(token);
