const express = require('express');
const loginController = require('./controllers/loginController');
const loginVerification = require('./helpers/loginVerification');
// ...

const app = express();

app.use(express.json());

// ...

app.post('/login', loginVerification, loginController);

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
