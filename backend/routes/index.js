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

module.exports = router;
