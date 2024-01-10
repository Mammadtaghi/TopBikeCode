export async function CheckAdmin(req, res, next) {
    if (!req.role.includes("admin")) {
        res.status(406).json({message:"Need Admin status to access!"})
        return
    }
    console.log("Admin status...");
    next()
}
