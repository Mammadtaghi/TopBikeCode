import mongoose from "mongoose";

const { Schema } = mongoose

const serviceSchema = new Schema({
    title: { type: String, required: true },
    info: { type: String, required: true },
    image: {
        public_id: {
            type: String,
            required: true
        },
        url: {
            type: String,
            required: true
        }
    },
})

export const Services = mongoose.model("service", serviceSchema)
