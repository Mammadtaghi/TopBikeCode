import { Users } from "./../Models/userModel.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";


// Post

export async function Register(req, res) {
    try {
        const { username, password } = req.body

        const user = await Users.findOne({ username: username })

        if (user.username) {
            res.status(406).json({ message: `We already have ${username} named user!` })
            return
        }

        const hashedPass = await bcrypt.hash(password, 10)

        const newUser = await Users.create({
            username: username,
            password: hashedPass,
        })

        await newUser.save()

        const token = jwt.sign({
            username: newUser.username,
            role: newUser.role,
            basket: newUser.basket,
            wishlist: newUser.wishlist,
        }, "AlbiKey", { expiresIn: "1h" })

        res.status(200).send(token)

    } catch (error) {
        res.status(500).json({ message: "Server error" })
    }
}

export async function Login(req, res) {
    try {
        const { username, password } = req.body

        const user = await Users.findOne({ username: username })

        if (!(await bcrypt.compare(password, user.password))) {
            res.status(406).json({ message: "Username and Password wrong!" })
            return
        }

        const token = jwt.sign({
            username: user.username,
            role: user.role,
            basket: user.basket,
            wishlist: user.wishlist,
        }, "AlbiKey", { expiresIn: "1h" })

        res.status(200).send(token)

    } catch (error) {
        res.status(500).json({ message: "Server error" })
    }
}

// Get

export async function GetAllUsers(req, res) {
    try {
        const users = await Users.find()

        res.status(200).send(users)
    } catch (error) {
        res.status(500).json({ message: "Server error" })
    }
}

export async function GetUserByID(req, res) {
    try {
        const { id } = req.params

        const user = await Users.findById(id)

        if (!user.username) {
            res.status(404).json({ message: "User not found!" })
            return
        }

        res.status(200).send(user)
    } catch (error) {
        res.status(500).json({ message: "Server error" })
    }
}

// Delete

export async function DeleteUserByID(req, res) {
    try {
        const { id } = req.params

        const findUser = await Users.findById(id)

        if (!findUser.username) {
            res.status(404).json({ message: "User not found!" })
            return
        }

        const deletedUser = await Users.findByIdAndDelete(id)

        res.status(200).send(`${deletedUser.username} deleted!`)
    } catch (error) {
        res.status(500).json({ message: "Server error" })
    }
}

// Put

export async function PromoteAsAdminByUsername(req, res) {
    try {
        const { username } = req.body

        const findUser = await Users.findOne({ username: username })

        if (!findUser.role) {
            res.status(404).json({ message: "User not found!" })
            return
        }

        if (findUser.role === "admin") {
            res.status(404).json({ message: `${findUser.username} is already an Admin!` })
            return
        }

        const updatedUser = await Users.findOneAndUpdate({ username: username }, { role: "admin" })

        res.status(200).send(`${updatedUser.username} promoted as Admin!`)
    } catch (error) {
        res.status(500).json({ message: "Server error" })
    }
}

export async function DemoteUserByUsername(req, res) {
    try {
        const { username } = req.body

        const findUser = await Users.findOne({ username: username })

        if (!findUser.role) {
            res.status(404).json({ message: "User not found!" })
            return
        }

        if (findUser.role === "User") {
            res.status(404).json({ message: `${findUser.username} is not an Admin!` })
            return
        }

        const updatedUser = await Users.findOneAndUpdate({ username: username }, { role: "user" })

        res.status(200).send(`${updatedUser.username} demoted!`)
    } catch (error) {
        res.status(500).json({ message: "Server error" })
    }
}

export async function UpdateUserWishlistByID(req, res) {
    try {
        const { id } = req.params
        const { wishlist } = req.body

        const findUser = await Users.findById(id)

        if (!findUser.username) {
            res.status(404).json({ message: "User not found!" })
            return
        }

        const updatedUser = await Users.findByIdAndUpdate(id, { wishlist: wishlist })

        res.status(200).send(`${updatedUser.username}'s wishlist updated!`)
    } catch (error) {
        res.status(500).json({ message: "Server error" })
    }
}

export async function UpdateUserWishlistByUsername(req, res) {
    try {
        const { username, wishlist } = req.body

        const findUser = await Users.findOne({ username: username })

        if (!findUser.role) {
            res.status(404).json({ message: "User not found!" })
            return
        }

        const updatedUser = await Users.findOneAndUpdate({ username: username }, { wishlist: wishlist })

        res.status(200).send(`${updatedUser.username}'s wishlist updated!`)
    } catch (error) {
        res.status(500).json({ message: "Server error" })
    }
}
