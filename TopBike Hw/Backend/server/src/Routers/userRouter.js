import express from "express";
import { DeleteUserByID, DemoteUserByUsername, GetAllUsers, GetUserByID, Login, PromoteAsAdminByUsername, Register, UpdateUserWishlistByID, UpdateUserWishlistByUsername } from "./../Controllers/userController.js";
import { CheckToken } from "../middleware/checkToken.js";
import { CheckAdmin } from "../middleware/checkAdmin.js";
import { CheckSuperAdmin } from "../middleware/checkSuperAdmin.js";

const router = express.Router()


// Post

router.post("/login", Login)

router.post("/register", Register)

// Get

router.get("/test", CheckToken, CheckAdmin, CheckSuperAdmin)

router.get("/users", CheckToken, GetAllUsers)

router.get("/users/:id", CheckToken, GetUserByID)

// Delete

router.delete("/users/:id", CheckToken, CheckAdmin, DeleteUserByID)

// Put

router.put("/users/promote", CheckToken, CheckSuperAdmin, PromoteAsAdminByUsername)

router.put("/users/demote", CheckToken, CheckSuperAdmin, DemoteUserByUsername)

router.put("/users/wishlist", CheckToken, UpdateUserWishlistByUsername)

router.put("/users/wishlist/:id", CheckToken, UpdateUserWishlistByID)

export default router