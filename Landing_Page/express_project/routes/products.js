const express = require('express');
const router = express.Router();
const Product = require('../models/Product');

router.get('/', async (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const limit = 10;
  const skip = (page - 1) * limit;

  const products = await Product.find().skip(skip).limit(limit);
  const count = await Product.countDocuments();

  res.render('products', {
    title: 'Products',
    products,
    pagination: {
      page,
      totalPages: Math.ceil(count / limit),
    },
  });
});

module.exports = router;