const Description = require('../models/Description');
const Product = require('../models/Product');

exports.getDescriptions = async (req, res) => {
  const descriptions = await Description.find();
  res.status(200).json({ descriptions });
};

exports.getDescription = async (req, res) => {
  const { id } = req.params;
  const description = await Description.findById(id);
  res.status(200).json(description);
};

exports.createDescription = async (req, res) => {
  const { title, description, price, images } = req.body;

  const product = await Product.create({
    title,
    description,
    price,
    images,
  });

  res.status(201).json(product);
};

exports.updateDescription = async (req, res) => {
  const { title, description, price, images } = req.body;
  const { id } = req.params;
  const product = Product.findByIdAndUpdate(id, {
    title,
    description,
    price,
    images,
  });
  res.status(200).json(product);
};

exports.deleteDescription = async (req, res) => {
  const { id } = req.params;
  await Product.findByIdAndDelete(id);
  res.status(200).json({ message: 'Delete description' });
};
