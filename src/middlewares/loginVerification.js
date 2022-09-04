const loginService = require('../services/loginService');

const validateLogin = async (req, res, next) => {
    const { email, password } = req.body;
    if (!email || !password) {
        return res.status(400).json({ message: 'Some required fields are missing' });
    }
    const login = await loginService(email, password);
    if (!login) {
        return res.status(400).json({ message: 'Invalid fields' });
    }
    next();
    };

module.exports = validateLogin;