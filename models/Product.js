// Product.js
const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  description: { type: String, required: true },
  photos: [{ type: String }], // URLs from Cloudinary
  stock: { type: Number, required: true },
  category: { type: String, required: true },
  reviews: [{
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    review: { type: String }
  }]
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
