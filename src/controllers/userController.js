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

const findById = async (req, res) => {
    const { id } = req.params;
    const user = await userService.findUserById({ id });
    if (!user) {
        return res.status(404).json({ message: 'User does not exist' });
    }
    return res.status(200).json(user);
    };

module.exports = { 
    create,
    findAllUsers,
    findById,
};