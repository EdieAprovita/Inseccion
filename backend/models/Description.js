const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const descriptionSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true,
    },
    description: {
      type: Schema.Types.ObjectId,
      ref: 'Product',
      required: true,
      maxlength: 50,
    },

    price: {
      type: Number,
      required: true,
    },

    images: {
      type: [String],
      minlength: 1,
    },
  },
  {
    timestamps: true,
  }
);

const Description = mongoose.model('Description', descriptionSchema);
module.exports = Description;
