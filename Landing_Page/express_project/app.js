const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const expressSession = require('express-session');

const app = express();

// Connect to MongoDB
 //mongoose.connect('mongodb://localhost:27017/ecommerce', {
  //useNewUrlParser: true,
  //useUnifiedTopology: true,
//}); //

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(expressSession({ secret: 'MySecretKey', resave: false, saveUninitialized: true }));

// Set the view engine to EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.use('/', require('./routes/index'));
app.use('/products', require('./routes/products'));
app.use('/contact', require('./routes/contact'));
app.use('/cart', require('./routes/cart'));

// Start the server
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});