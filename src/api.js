const express = require('express');
const loginController = require('./controllers/loginController');
const userController = require('./controllers/userController');
const categoryController = require('./controllers/categoryController');
const loginVerification = require('./middlewares/loginVerification');
const userVer = require('./middlewares/userVerification');
const tokenVer = require('./middlewares/tokenVerification');
const categoryVer = require('./middlewares/categoryVerification');
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

app.post('/categories',
tokenVer.validateToken, 
categoryVer.validateCategory,
categoryController.create);

app.get('/user', 
tokenVer.validateToken, 
userController.findAllUsers);

app.get('/user/:id', 
tokenVer.validateToken, 
userController.findById);

app.get('/categories',
tokenVer.validateToken,
categoryController.findAll);

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
