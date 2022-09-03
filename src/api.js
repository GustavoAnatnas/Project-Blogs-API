const express = require('express');
const loginController = require('./controllers/loginController');
const loginVerification = require('./helpers/loginVerification');
const userController = require('./controllers/userController');
const userVer = require('./helpers/userVerification');
// ...

const app = express();

app.use(express.json());

// ...

app.post('/login', loginVerification, loginController);
app.post('/user', 
userVer.validateDisplayName, 
userVer.validatePassword,  
userVer.checkingEmail,
userVer.alreadyUsedEmail,
userController);

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
