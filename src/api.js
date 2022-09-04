const express = require('express');
const loginController = require('./controllers/loginController');
const loginVerification = require('./middlewares/loginVerification');
const userController = require('./controllers/userController');
const userVer = require('./middlewares/userVerification');
const tokenVer = require('./middlewares/tokenVerification');
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
userController.create);

app.get('/user', 
tokenVer.validateToken, 
userController.findAllUsers);

app.get('/user/:id', 
tokenVer.validateToken, 
userController.findById);

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
