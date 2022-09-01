const mongoose=require('mongoose');

const educationSchema=new mongoose.Schema({
    institute_name:{
        type:String,
    },
    state:{
        type:String
    },
    field:{
        type:String
    },
    degree:{
        type:String
    },
    cgpa:{
        type:String
    },
    is_currently_working:{
        type:Boolean,
        default:false
    },
    start_year:{
        type:String
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
    }

});
module.exports=mongoose.model('Education',educationSchema)