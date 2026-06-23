const registerModel = require('../models/auth.models')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const tokenBlacklistModel = require('../models/blacklist.model')
const emailServices = require('../services/email.service')

async function registerUser (req,res){
    try{
        const {name, email, password} = req.body
    const isUserAlreadyexist = await registerModel.findOne({
        $or:[
            {email}
        ]
    })
    if(isUserAlreadyexist){
        return res.status(409).json({
            message:"User already exist"
        })
    }
    const hash = await bcrypt.hash(password,10)

    const user = await registerModel.create({
        name,
        email,
        password:hash
    })

    const token = jwt.sign({
        id:user._id,
    }, process.env.JWT_SECRET)
    await emailServices.sendRegistrationEmail(user.name, user.email)
    
    return res.status(201).json({
        message:"User Registeres Successful",
        user:{
            id:user._id,
            name:user.name,
            email:user.email
        }
    })

    }catch(err){
        console.log(err)
        return res.status(500).json({
            message:"Something went wrong"
        })
    }
    
}

async function loginUser(req, res) {
    const {name, email, password} = req.body
    const user = await registerModel.findOne({
        email
    }) 
    if(!user){
        return res.status(409).json({
            message: "User not found"
        })
    }

    const isPasswordvalid = await bcrypt.compare(password, user.password)
    if(!isPasswordvalid){
        return res.status(409).json({
            message:"Invalid Password"
        })
    }

    const token = jwt.sign({
        id:user._id
    }, process.env.JWT_SECRET,
    {expiresIn:"1d"})
    res.cookie("token", token)

    return res.status(200).json({
        message:"User Loggedin Successfully",
       token,
        user:{
            id:user._id,
            name:user.name,
            email:user.email
        }
    })

}

async function logoutUser(req, res) {
    try{
        const token = req.cookies.token || req.headers.authorization?.split(" ")[1]
        if(!token){
            return res.status(200).json({
                message:"User logged out successfully "
            })
        }

        await tokenBlacklistModel.create({token})
        res.clearCookie("token")

        return res.status(200).json({
            message:"User Logged out Succesfully"
        })

    }catch(err){
        console.log(err)
        return res.status(500).json({
            message:"Logout failed"
        })
    }
    
}

module.exports = {registerUser, loginUser, logoutUser}