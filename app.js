var express= require("express");
var app= express();
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var flash= require("connect-flash");
var passport=require("passport");
var LocalStrategy= require("passport-local");
var User= require("./models/User.js");
var Teacher= require("./models/Teacher.js");
var db=require("./data.js");
mongoose.connect("mongodb://localhost/my_app");
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");
//passport Config.
app.use(require("express-session")({
    secret: "India",
    resave: false,
    saveUninitialized: false
}));
app.use(passport.initialize()); // initiate Passport
app.use(passport.session()); // passport session
//passport.use(new LocalStratergy(User.authenticate()));// remember when we use "local"
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());
//app.use(function(res,req,next){
  // res.local.Currentuser=req.user;
   //next();
//});
db();
app.get("/",function(req,res){
   res.send("main"); 
});

app.get("/register",function(req,res){
res.render("register");
});
app.post("/register",function(req,res){
    var newuser= new User({Username: req.body.Username,
        Name:req.body.Name,
        Class:req.body.Class});
    User.register(newuser,req.body.Password,function(err,req){
         if(err){
             console.log("err");
         }
         else
         {
             passport.authenticate("local")(req,res,function(){
              console.log("Welcome"+ User.Name);
              res.redirect("/");
             });
         }

    });
});
app.get("/login",function(req,res){
    res.render("login");
});
app.post("/login", passport.authenticate("local",
 {
     successRedirect:"/",
     failureRedirect:"/login"
 }),function(req,res){
 }); 
app.listen(process.env.PORT,process.env.IP,function(){
    console.log("server started");
});