import {Order} from "../models/order.models.js";
import mongoose from "mongoose";

const placeOrder = async (req, res) => {
    const {shippingDetails, paymentDetails, cart} = req.body;
    const orderedBy = new mongoose.Types.ObjectId("6818750d41bd1c8925a2f708")
    if(!shippingDetails || !paymentDetails) {
        res.status(400).json({error: "Payment or shipping details not found"});
    }
    const order = await Order.create({shippingDetails, paymentDetails, cart, orderedBy})
    if(!order) {
        res.status(500).json({error: "Could not create order"});
    }
    return res.status(200).json(order)
}
const getOrders = async (req, res) => {
    const orders = await Order.find();
    console.log(orders.length);
    return res.status(200).json(orders)
}
export {
    placeOrder,
    getOrders,
}