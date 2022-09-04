const { User } = require('../database/models');

const createUser = async (displayName, email, password, image) => {
  const newUser = await User.create({ displayName, email, password, image });
  return newUser;
};

const findUser = async () => {
  const users = await User.findAll({
    attributes: { exclude: ['password'] },
  });
  return users;
};

const findUserById = async ({ id }) => {
  const user = await User.findOne({ where: { id }, attributes: { exclude: ['password'] } });
  return user;
};

module.exports = { 
  createUser, 
  findUser, 
  findUserById,
};