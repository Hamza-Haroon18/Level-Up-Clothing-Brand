const mongoose = require("mongoose")
const productSchema = new mongoose.Schema({
    orderNumber: { 
        type: String,
        required: true,
        unique: true
    },
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    mobile: {
        type: Number,
        required: true,
    },
    alternateMobile: {
        type: Number,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    landmark: {
        type: String,
        required: true,
    },
    city: {
        type: String,
        required: true,
    },
    country: {
        type: String,
        required: true,
    },
    postalCode: {
        type: String,
        required: true,
    },
    province: {
        type: String,
        required: true,
    },
    message: {
        type: String,
        required: true,
    },
    totalAmount : {
        type: String,
        required: true,
    },
    delivery:{
        type: String,
        required: true,
    },
    status: {
        type: String,
        enum: ["Pending", "Confirmed", "Shipped", "Delivered", "Cancelled"],
        required: true,default: "Pending"
    },
    cart: [
        {
            productId: {
                type: String,
                required: true,
            },
            size: {
                type: String,
                required: true,
            },
            quantity: {
                type: Number,
                required: true,
            },
            price: {
                type: Number,
                required: true,
            },
            image: {
                type: String,
                required: true,
            }
        }
    ],
    createdAt: {
        type: Date,
        default: Date.now,
    }
})

const items = mongoose.model("Checkout-Products", productSchema)

module.exports = items