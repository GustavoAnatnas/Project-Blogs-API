const { User } = require('../database/models');

const loginService = async (email, password) => {
    const login = await User.findOne({ where: { email, password } });
    return login;
};

module.exports = loginService;