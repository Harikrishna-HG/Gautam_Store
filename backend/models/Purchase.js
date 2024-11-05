// models/Purchase.js
const mongoose = require('mongoose');

const PurchaseSchema = new mongoose.Schema({
    productId: { type: String, required: true },
    title: { type: String, required: true },
    purchasedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Purchase', PurchaseSchema);
