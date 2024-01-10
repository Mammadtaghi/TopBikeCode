import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import serviceRouter from "./src/Routers/serviceRouter.js";
import productRouter from "./src/Routers/productRouter.js";
import userRouter from "./src/Routers/userRouter.js";

dotenv.config()

const PORT = process.env.PORT
const PASSWORD = process.env.PASSWORD
const URl = process.env.CON_URL.replace("<password>", PASSWORD)

const app = express()

app.use(cors())
app.use(express.json())


app.use("/services", serviceRouter)
app.use("/products", productRouter)
app.use("/", userRouter)


mongoose.connect(URl).catch((err) => console.log(err))

app.listen(PORT, () => {
    console.log(`Server online at ${PORT} port!`);
})
