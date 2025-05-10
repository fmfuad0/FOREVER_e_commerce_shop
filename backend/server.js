import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';
import {connectDB} from "./src/Database/connectToDatabase.js";
import {login} from "./src/controllers/auth.controllers.js";
import {getOrders, placeOrder} from "./src/controllers/order.controllers.js";

dotenv.config({ path: './.env' });
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true,
}));
app.use(cookieParser());
app.use(express.static('public'));

connectDB()
    .then(()=>{
        app.listen(process.env.PORT, () => {
            console.log(`Server running on port ${process.env.PORT}`);})
    })
    .catch((err)=>{
        console.log(err);
    })
app.post('/login', login)
app.post('/place-order', placeOrder)
app.get('/get-orders', getOrders)
console.log(process.env.PORT);

