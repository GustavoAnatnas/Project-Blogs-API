const userService = require('../services/userService');
// const { createUser, findUser } = require('../services/userService');

const jwtToken = require('../helpers/jwtToken');

const create = async (req, res) => {
    const { displayName, email, password, image } = req.body;
    const newUser = await userService.createUser(displayName, email, password, image);
    const token = jwtToken({ data: newUser });
    return res.status(201).json({ token });
    };

const findAllUsers = async (req, res) => {
    const users = await userService.findUser();
    return res.status(200).json(users);
    };

module.exports = { 
    create,
    findAllUsers,
};