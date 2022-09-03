const { User } = require('../database/models');

const validateDisplayName = async (req, res, next) => {
    const { displayName } = req.body;
    if (displayName.length < 8) {
        return res.status(400)
        .json({ message: '"displayName" length must be at least 8 characters long' });
    }
    next();
    };

const validatePassword = async (req, res, next) => {
    const { password } = req.body;
    if (password.length < 6) {
        return res.status(400)
        .json({ message: '"password" length must be at least 6 characters long' });
    }
    next();
    };

const checkingEmail = async (req, res, next) => {
    const { email } = req.body;
    const emailRegex = /\S+@\S+\.\S+/;
    if (!emailRegex.test(email)) {
        return res.status(400)
        .json({ message: '"email" must be a valid email' });
    }
    next();
    };

    const alreadyUsedEmail = async (req, res, next) => {
        const { email } = req.body;
     const alreadyUsed = await User.findOne({ where: { email } });
    if (alreadyUsed) {
        return res.status(409)
        .json({ message: 'User already registered' });
    }
    next();
    };

module.exports = {
    validateDisplayName,
    validatePassword,
    checkingEmail,
    alreadyUsedEmail,
};