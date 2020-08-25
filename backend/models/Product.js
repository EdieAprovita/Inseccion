const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    description: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Description',
      },
    ],
  },

  timestamps: true,
});

const Product = mongoose.model('Product', productSchema);
module.exports = Product;
