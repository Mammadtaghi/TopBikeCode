import express from "express";
import { CreateService, DeleteServiceByID, GetAllServices, GetServiceByID } from "../Controllers/serviceController.js";

const router = express.Router()


// Get

router.get("/", GetAllServices)

router.get("/:id", GetServiceByID)

// Post

router.post("/", CreateService)

// Delete

router.delete("/:id", DeleteServiceByID)

export default router
