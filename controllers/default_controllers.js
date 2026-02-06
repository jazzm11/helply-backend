

const send_out_ticket = (req,res)=>{
    try{
        res.json({response: "Hello World!"})
    }catch(err){
        console.log("Error on send_out_ticket:",err)
    }
}


module.exports = {
    send_out_ticket
}