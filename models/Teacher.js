var mongoose= require('mongoose');
var Schema = mongoose.Schema;
var TeacherSchema= new Schema(
    {   
        Name: { type:String, required: true},
        Subjects:[String],
        Class:Number,
        Rating: Number,
    }
);

module.exports= mongoose.model('Teacher',TeacherSchema);