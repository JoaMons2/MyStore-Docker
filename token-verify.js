const jwt = require('jsonwebtoken');

const secret = 'myCat';
const token = 'eyJhbGci0iJIUzI1NiIsInR5CI6IkpXVCJ9.eyJzdWIioHFDKJhfhHGJHghgvgjhbHBUGVCjgvcVHVGvghvtcxesrwswpkOijygtIJK'

function verifyToken(plaload, secret) {
  return jwt.verify(token, secret);
}

const playload = verifyToken(token, secret);
console.log(playload);
