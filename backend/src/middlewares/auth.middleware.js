const usermodel = require('../models/auth.models')
const jwt = require('jsonwebtoken')
const tokenBlacklistModel = require('../models/blacklist.model')

async function isAuthenticated(req,res,next){
    const token = req.cookies.token || req.headers.authorization?.split(" ")[1];
    if(!token){
        return res.status(401).json({
            message:"Unauthorized access, token is missing"
        })
    }

    try{
        const isBlacklisted = await tokenBlacklistModel.findOne({token})
        if(isBlacklisted){
            return res.status(401).json({
                message:"Invalid token"
            })
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        const user = await usermodel.findById(decoded.id)
        req.user = user
        return next()
    }catch(err){
        return res.status(401).json({
            message:"Invalid or expired token"
        })
    }
}

module.exports = isAuthenticated