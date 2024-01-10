import { Services } from "./../Models/serviceModel.js";
import cloudinary from "./../Utils/cloudinary.js";

// Get

export async function GetAllServices(req, res) {
    try {
        const services = await Services.find()
        res.status(200).send(services)
    } catch (error) {
        res.status(500).json({ message: error })
    }
}

export async function GetServiceByID(req, res) {
    try {
        const { id } = req.params
        const service = await Services.findById(id)
        res.status(200).send(service)
    } catch (error) {
        res.status(500).json({ message: error })
    }
}

// Post

export async function CreateService(req, res) {
    try {
        const { title, info, image } = req.body

        const result = await cloudinary.uploader.upload(image, {
            folder: "services",
        })

        const newService = await Services.create({
            title: title,
            info: info,
            image: {
                public_id: result.public_id,
                url: result.secure_url
            },
        })
        await newService.save()
        res.status(200).send("Service created!")
    } catch (error) {
        res.status(500).json({ message: error })
    }
}

// Delete

export async function DeleteServiceByID(req, res) {
    try {
        const { id } = req.params
        await Services.findByIdAndDelete(id)
        res.status(200).send("Service succesfully deleted!")
    } catch (error) {
        res.status(500).json({ message: error })
    }
}

