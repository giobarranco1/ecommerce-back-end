const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  // find all categories
  const allCategories = await Category.findAll({
    // be sure to include its associated Products
    include: [{model: Product}]
  }); 
  res.status(200).json(allCategories);
});

router.get('/:id', async (req, res) => {
  // find one category by its `id` value
  const singleCategory = await Category .findByPk(req.params.id, {
    // be sure to include its associated Products
    include: [{model:Product}]
  })
  res.status(200).json(singleCategory);
});

router.post('/', async (req, res) => {
  // create a new category
  const newCategory = await Category.create({
    //uses body category_name: new category in insomnia 
    category_name: req.body.category_name
  })
  res.status(200).json(newCategory);
});

router.put('/:id', async (req, res) => {
  // update a category by its `id` value
  const updateCategory = await Category.update(
    // use body "category_name": "new Category name" to update target category in insomnia 
    {category_name: req.body.category_name},
    // use the id in the url to determine which category gets updated
    {where: {id: req.params.id}}
  );
  res.status(200).json(updateCategory)
});

router.delete('/:id', async (req, res) => {
  // delete a category by its `id` value
  const deleteCategory = await Category.destroy({
    where: {id: req.params.id}
  });
  res.status(200).json(deleteCategory);
});

module.exports = router;
