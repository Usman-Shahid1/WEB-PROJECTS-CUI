const mongoose = require('mongoose');
const Product = require('../models/Product');

mongoose.connect("mongodb+srv://itsus5220:4linzRYHdtFoiOrg@uni-ecom.6uow5ui.mongodb.net/?retryWrites=true&w=majority&appName=uni-ecom"
, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Connected to MongoDB Atlas for data insertion');
}).catch((err) => {
    console.error('Error connecting to MongoDB Atlas:', err);
});

const sampleProducts = [
    { name: "Product 1", price: 10.99, description: "Description for product 1", image: "/public/images/box4_image.jpg" },
    { name: "Product 2", price: 19.99, description: "Description for product 2", image: "/public/images/box5_image.jpg" },
    { name: "Product 3", price: 5.99, description: "Description for product 3", image: "/public/images/box6_image.jpg" }
];

Product.insertMany(sampleProducts).then(() => {
    console.log('Sample data inserted');
    mongoose.connection.close();
}).catch((err) => {
    console.error('Error inserting sample data:', err);
});