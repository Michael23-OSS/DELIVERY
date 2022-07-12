//Server
const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
//const userRoutes = require("./routes/user");
const productRoutes = require("./routes/product");
/*const dealerRoutes = require("./routes/dealer");
const paymentRoutes = require("./routes/payment");
const productController = require("./controller/product");
*/


const app = express()
const port = process.env.PORT || 3000;
app.listen(port, () =>console.log('Server listening on port', port));

//routes 
app.get('/', (req, res) => {
    res.send('Welcome to my API')
});

//middlewares
app.use(express.json());
//app.use('/delivery', userRoutes);
app.use('/delivery', productRoutes);
/*app.use('/delivery', dealerRoutes);
app.use('/delivery', paymentRoutes);
app.use('/delivery', productController.addProduct);
*/

//Conecction MongoDB Atlas
mongoose
.connect(process.env.MONGODB_URI)
.then(() => console.log('Connected to MongoDB Atlas'))
.catch((error) => console.error(error));

