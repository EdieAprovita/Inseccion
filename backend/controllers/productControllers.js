const Product = require('../models/Product');

exports.getProducts = async (req, res) => {
  const products = await Product.find().populate('descriptions');
  res.status(200).json({ products });
};

exports.getProduct = async (req, res) => {
  const { id } = req.params;
  const product = await Product.findById(id).populate('descriptions');
  res.status(200).json(product);
};

exports.createProduct = async (req, res) => {
  const { name, description } = req.body;

  const product = await Product.create({
    name,
    description,
  });

  res.status(201).json(product);
};

exports.updateProduct = async (req, res) => {
  const { name, description } = req.body;
  const { id } = req.params;
  const product = Product.findByIdAndUpdate(id, { name, description });
  res.status(200).json(product);
};

exports.deleteProduct = async (req, res) => {
  const { id } = req.params;
  await Product.findByIdAndDelete(id);
  res.status(200).json({ message: 'Deleted product' });
};
