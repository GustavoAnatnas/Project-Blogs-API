const { Category } = require('../database/models');

const validateCategory = async (req, res, next) => {
    const { name } = req.body;
    if (!name) {
        return res.status(400).json({ message: '"name" is required' });
    }
    const category = await Category.findOne({ where: { name } });
    if (category) {
        return res.status(409).json({ message: 'Category already registered' });
    }
    next();
    };

module.exports = { validateCategory };