const categoryService = require('../services/categoryService');

const create = async (req, res) => {
    const { name } = req.body;
    const newCategory = await categoryService.createCategory(name);
    return res.status(201).json(newCategory);
    };

const findAll = async (_req, res) => {
    const categories = await categoryService.findAllCategories();
    return res.status(200).json(categories);
    };

module.exports = { create, 
    findAll,
 };