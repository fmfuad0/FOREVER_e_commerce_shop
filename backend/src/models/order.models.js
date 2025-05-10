import mongoose, {Schema} from "mongoose";

const orderSchema = new Schema({
    shippingDetails: {},
    paymentDetails:{},
    orderedBy:{
        type: Schema.Types.ObjectId,
        ref: "User",
    },
    cart:{},
    status: {
        type:String,
        default: "Pending",
        enum: ["Pending", "Ready to deliver", "On the way"],
    },
})

export const Order = mongoose.model("Order", orderSchema);