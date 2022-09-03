const loginService = require('../services/loginService');
const jwtToken = require('../helpers/jwtToken');

const loginController = async (req, res) => {
    const { email, password } = req.body;
    const login = await loginService(email, password);
    const token = jwtToken({ data: login });
    return res.status(200).json({ token });
    };

module.exports = loginController;