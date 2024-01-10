import mongoose from "mongoose";

const { Schema } = mongoose

const productSchema = new Schema({
    image: {
        public_id: { type: String, required: true },
        url: { type: String, required: true }
    },
    title: { type: String, required: true },
    price: { type: Number, required: true },
    categories: [{ type: String, required: true }],
    discount: { type: Number, default: 0 },
});

export const Products = mongoose.model("products", productSchema)
