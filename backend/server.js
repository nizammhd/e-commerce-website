const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');

const app = express();
const port = process.env.PORT || 5000;

const productRoutes = require('./routes/productRoutes');
const userRoute = require('./routes/userRoutes');
const adminRouter = require('./routes/adminRoutes');
const cartRoutes = require('./routes/cartRoutes');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const userMiddleware = require('./middleware/userMiddleware');
const { addToWishlist, addToCart } = require('./controllers/Cart');

app.use(express.json());
app.use(cors(
    {
        origin:"*",
        methods:"GET,HEAD,PUT,POST,PATCH,DELETE"
    }
));

// Use bodyParser only once
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

connectDB();

app.use('/api/products', productRoutes);
app.use('/users', userRoute);
app.use('/admin', adminRouter);
app.post('/wishlist',userMiddleware,addToWishlist);
// app.post('/cart',userMiddleware,addToCart);
app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});
