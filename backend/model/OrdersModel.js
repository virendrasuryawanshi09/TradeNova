// backend/model/OrdersModel.js
const { model, Schema } = require("mongoose");

// Define schema
const OrdersSchema = new Schema({
  productName: { type: String, required: true },
  quantity: { type: Number, required: true },
  price: { type: Number, required: true },
  userId: { type: Schema.Types.ObjectId, ref: "User" },
  status: { type: String, default: "pending" },
}, { timestamps: true });

// Create model
const OrdersModel = model("Order", OrdersSchema);

// Export
module.exports = { OrdersModel };
