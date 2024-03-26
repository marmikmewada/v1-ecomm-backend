// handleStock.js
const Product = require('../models/product');

const handleStock = async (products) => {
  try {
    for (const product of products) {
      const orderedProduct = await Product.findById(product.product);
      if (!orderedProduct) {
        throw new Error('Product not found');
      }
      orderedProduct.stock -= product.quantity;
      await orderedProduct.save();
    }
  } catch (error) {
    throw new Error(error.message);
  }
};

module.exports = handleStock;
