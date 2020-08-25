const express = require('express');
const router = express.Router();
const catchErrors = require('../middlewares/catchErros');

const {
  createProduct,
  getProduct,
  getProducts,
  updateProduct,
  deleteProduct,
} = require('../controllers/productControllers');

const {
  getDescription,
  createDescription,
  updateDescription,
  deleteDescription,
} = require('../controllers/descriptionController');

router.get('/', (req, res, next) => {
  res.status(200).json({ msg: 'Working' });
});

//Products

router.get('/products', catchErrors(getProducts));
router.get('/products/:id', catchErrors(getProduct));
router.post('/products', catchErrors(createProduct));
router.patch('/products/:id', catchErrors(updateProduct));
router.delete('products/:id', catchErrors(deleteProduct));

//Description

router.get('/description/:id', catchErrors(getDescription));
router.get('/descriptions', catchErrors(createDescription));
router.patch('/descriptions/:id', catchErrors(updateDescription));
router.delete('/descriptions/:id', catchErrors(deleteDescription));

module.exports = router;
