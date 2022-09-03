const jwt = require('jsonwebtoken');

const { JWT_SECRET } = process.env;
const jwtToken = (payload) => jwt.sign(payload, JWT_SECRET, { expiresIn: '1h' });

module.exports = jwtToken;