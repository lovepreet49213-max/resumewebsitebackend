const mongoose = require('mongoose');



const Schema = mongoose.Schema;
const ObjectId = mongoose.Types.ObjectId;
const userSchema=new Schema({

    userId :String,
    password : String

});


const userModel=mongoose.model("user",userSchema);
module.exports={
    userModel :userModel
}
