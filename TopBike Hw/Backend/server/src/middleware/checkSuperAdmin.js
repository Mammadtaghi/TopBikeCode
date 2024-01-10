export async function CheckSuperAdmin(req, res, next) {
    if (!req.role.includes("superadmin")) {
        res.status(406).json({message:"Need SuperAdmin status to access!"})
        return
    }
    console.log("Hello, Albinoni!");
    res.send("Hi")
}
