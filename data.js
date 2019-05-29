var mongoose=require("mongoose");
var Teacher= require("./models/Teacher.js");
var data=[
    {Name:"Ravi Shankar",Subjects:["Science","History"],Class:"5",Rating:"3.5"},
    {Name:"Shiv Sharma",Subjects:["Maths"],Class:"8",Rating:"4"},
    {Name:"Rahul Sharma",Subjects:["English","French"],Class:"10",Rating:"4"},
    {Name:"Shyam Triphati",Subjects:["Hindi","Sanskrit"],Class:"5",Rating:"3"},
    {Name: "Rajesh Mehta",Subjects:["Maths"],Class:"9",Rating:"5"},
    {Name:"Ravi Shastri",Subjects:["English","SocialScience"],Class:"10",Rating:"4"},
    {Name:"Sharad Jain",Subjects:["Hindi"],Class:"8",Rating:"3.2"},
    {Name:"Mohit Kumar",Subjects:["Maths","Science"],Class:"10",Rating:"2.5"}
    ];
    function db(){
        Teacher.remove({},function(err){
         if(err){
             console.log(err);
         }
         else{
             console.log("Removed from Database");
         }
        });
    data.forEach(function(seed){
         Teacher.create(seed,function(err,teacher){
        if(err){
            console.log(err);
        }else{
            console.log("added to Database");
            teacher.save();
        }
    });
    });
    }
    module.exports=db;