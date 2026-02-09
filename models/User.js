const {Schema, model}= require("mongoose")
const argon2 = require("argon2")


const userSchema = new Schema({
    name:{
        type: String,
        required:true,
        unique:true
    },
    passwd:{
        type: String,
        required: true,
        unique:true
    }
});

userSchema.pre("save", async function(){
    try{
        this.passwd = await argon2.hash(this.passwd)
    }catch(err){
        console.log("Couldn't hash the password. Cause:", err)
    }
})

userSchema.statics.signUp = async(name, passwd, conPass)=>{
if(passwd === conPass){
    const user = new User({
        name:name,
        passwd:passwd
    })
    await user.save()
    return user._id
}
throw Error("The passwords doesn't match")
}

userSchema.statics.signUp = async(name, passwd)=>{
    const user = await User.find({name: name})
    if(await argon2.verify(user.passwd, passwd)){
        return user._id
    }
    throw Error("The provided password is wrong")
}

const User = model("Users", userSchema);

module.exports = User