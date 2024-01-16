import mongoose from "mongoose";

const { Schema } = mongoose

const userSchema = new Schema({
    username: { type: String, required: true },
    password: { type: String, required: true },
    role: { type: String, enum: ["user", "admin", "superadmin"], default: "user" },
    basket: [{
        image: {
            public_id: { type: String, required: true },
            url: { type: String, required: true }
        },
        title: { type: String },
        price: { type: Number },
        count: { type: Number },
        categories: [{ type: String }],
        discount: { type: Number, default: 0 },
    }],
    wishlist: [{
        image: {
            public_id: { type: String, required: true },
            url: { type: String, required: true }
        },
        title: { type: String },
        price: { type: Number },
        categories: [{ type: String }],
        discount: { type: Number, default: 0 },
    }],
})

export const Users = mongoose.model("users", userSchema)