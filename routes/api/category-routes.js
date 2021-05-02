const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

// find all categories
router.get('/', (req, res) => {
  // be sure to include its associated Products
  Category.findAll()
  .then(dbCategoryData => res.json(dbCategoryData))
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
  //still needs to add assosated stuff here 
});

  // find one category by its `id` value
router.get('/:id', (req, res) => {
  // be sure to include its associated Products
  Category.findOne({
    where: {
      id: req.params.id
    }
  })
  .then(dbCategoryData => {
    // console.log(dbCategoryData)
    if(!dbCategoryData) {
      res.status(400).json({ message: 'No category found with this id'});
      return;
    }
    res.json(dbCategoryData)
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

// create a new category  /api/categories
router.post('/', (req, res) => {
  Category.create({
    category_name: req.body.category,
  })
  .then(dbCategoryData => res.json(dbCategoryData))
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });

});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
});

module.exports = router;
