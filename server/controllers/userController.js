import User from '../models/User.js'
import { creationValidation } from '../middlewares/validator.js'
import bcrypt from 'bcrypt'

export const allUsers = async (req, res) => {
    try {
        const users = await User.find()
        return res.status(200).json(users)
    } catch(err) {
        return res.json({error: err.message})
    }
}

export const userInfo = async (req, res) => {
    const user = req.user

    try {
        const details = await User.find({_id: user.id})
        return res.status(200).json(details)
    } catch (err) {
        return res.json({error: err.message})
    }
}

export const userRoles = async (req, res) => {
    return res.json(req.user.roles)
}

export const createUser = async (req, res) => {
    // Validation
    const { error } = creationValidation(req.body)
    if (error) return res.json({error: error.details[0].message})

    // Hash the password
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(req.body.password, salt)

    // Saving the new User
    try {
        const newUser = new User({
            password: hashedPassword,
            email: req.body.email,
            name: req.body.name,
            roles: req.body.roles
        })

        const user = await newUser.save()
        return res.status(200).json(user)
    } catch (err) {
        // Check For Duplictaes
        if (err.keyPattern.email) res.json({error: "Email Already Exist"})
        return res.json({error: error})
    }
}

export const deleteUser = async (req, res) => {
    const id = req.body.id

    try {
        await User.findByIdAndDelete(id)
        return res.status(200).json("User Successfully deleted")
    } catch (err) {
        res.json({error: err})
    }
}

export const updateUser = async (req, res) => {
    const salt = await bcrypt.genSalt(10)
    if(req.body.password){
        req.body.password = await bcrypt.hash(req.body.password, salt)
    }

    try {
        await User.findByIdAndUpdate(req.id, {
            email: email,
            password: req.body.password,
            roles: req.body.roles,
            name: req.body.password
        })
    } catch (err) {
        // Check For Duplictaes
        if (err.keyPattern.email) res.json({error: "Email Already Exist"})
        res.json({error: err})
    }
}

export const updateUserRoles = async (req, res) => {
    const { id } = req.query
    console.log(id)
    
    try {
        await User.findByIdAndUpdate(id, {
            roles: req.body.roles
        })

        return res.status(200).json("updated successfully")
    } catch (err) {
        // Check For Duplictaes
        if (err.keyPattern.email) res.json({error: "Email Already Exist"})
        res.json({error: err})
    }
}