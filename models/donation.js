const mongoose = require("mongoose");

const donationSchema = new mongoose.Schema({
    donor: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "users",
        required: true,
    },
    agent: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "users",
    },
    // Food Donation
    foodType: {
        type: String,
    },
    quantity: {
        type: String,
    },
    cookingTime: {
        type: Date,
    },
    // Clothes Donation
    clothesType: {
        type: String,
    },
    clothesQuantity: {
        type: Number,
    },
    // Medicines Donation
    medicines: {
        type: String,
    },
    medicineExpiry: {
        type: Date,
    },
    // Money Donation
    amount: {
        type: Number,
    },
    paymentMode: {
        type: String,
        enum: [ "bank transfer", "UPI"],
    },
    accountNumber: {
        type: String,
    },
    ifsc: {
        type: String,
    },
    // Common Fields
    address: {
        type: String,
        required: true,
    },
    phone: {
        type: Number,
        required: true,
    },
    donorToAdminMsg: {
        type: String,
    },
    adminToAgentMsg: {
        type: String,
    },
    collectionTime: {
        type: Date,
    },
    status: {
        type: String,
        enum: ["pending", "rejected", "accepted", "assigned", "collected"],
        required: true,
    },
});

const Donation = mongoose.model("donations", donationSchema);
module.exports = Donation;
