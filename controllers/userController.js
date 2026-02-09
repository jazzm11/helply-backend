const User = require("../models/User")


const sign_up_user = async(req,res)=>{
const {name, passwd, conPass} = req.body
    try{
        const userId = await User.signUp(name,passwd, conPass)
        res.status(201).json({userId})
    }catch(err){
        console.log(err)
        res.status(500).json({err})
    }
}


module.exports = {sign_up_user}