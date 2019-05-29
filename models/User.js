var mongoose= require("mongoose");
var passportLocalMongoose = require("passport-local-mongoose");
var Schema= mongoose.Schema;
var StudentSchema= new Schema(
{
    Username: {type:String,required:true},
    Password:{type:String},
    Name:{type:String},
    Class: { type: Number}
}
);
StudentSchema.plugin(passportLocalMongoose);
module.exports= mongoose.model('User',StudentSchema); 