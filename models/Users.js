const mongoose=require('mongoose')
const useSchema= new mongoose.Schema({
    userID:{
        type:String,
        require:true
    },
    mobileNo:{
            type:Number,
            require:true
    },
    email:{
        type:String,
        require:true
    }
})

module.exports=mongoose.model('Users',useSchema)