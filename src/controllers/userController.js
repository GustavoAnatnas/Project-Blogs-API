const userService = require('../services/userService');
const jwtToken = require('../helpers/jwtToken');

const createUser = async (req, res) => {
    const { displayName, email, password, image } = req.body;
    const newUser = await userService(displayName, email, password, image);
    const token = jwtToken({ data: newUser });
    return res.status(201).json({ token });
    };

module.exports = createUser;