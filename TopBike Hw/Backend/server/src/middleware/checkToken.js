import jwt from "jsonwebtoken";

export async function CheckToken(req, res, next) {
    try {
        if (!req.headers.authorization.startsWith("Bearer")) {
            res.status(406).json({ message: "Token isn't valid!" })
            return
        }

        const token = req.headers.authorization.split(" ")[1]

        try {
            const decodedToken = await jwt.verify(token, "AlbiKey")

            req.username = decodedToken.username
            req.role = decodedToken.role
            req.basket = decodedToken.basket
            req.wishlist = decodedToken.wishlist

            console.log("Token valid...");
            next()
        } catch (error) {
            res.status(401).json({ message: "Token expired!" })
            return
        }
    } catch (error) {
        res.status(500).json({ message: "Server error!" })
    }
}
