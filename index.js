const bodyParser = require("body-parser");
const express = require("express")
const app = express()
const connection = require("./database/database")
const Info = require("./database/Info")
const Users = require("./database/User")

//parser

app.use(express.json());
app.use(express.urlencoded({extended: false}));

// sequelize
connection 
        .authenticate()
        .then(()=>{
          
          console.log("Connection Success");


        }).catch((msgError)=>{

          console.log(msgError);


        });



//set view
app.set("view engine","ejs");

//static archives
app.use(express.static("public"));

//favicon
app.use("/favicon.ico",express.static("./images/favicon.ico"));

//routes
app.get("/",function(req,res){
res.render("./login.ejs");
});

app.get("/page",function(req,res){
    res.render("./page.ejs");

});

app.post("/success",function(req,res){

const {username, password} = req.body

Users.findOne({
  
  where:{named:username}

}).then(user=>{

  if(user!==undefined){


var correct = password == user.password? true:false

      if(correct){

         res.redirect("/page");

      }else{
        res.redirect("/");
      }

  }else{

     res.redirect("/");

  }





}).catch((msgerror)=>{

console.log(msgerror);
});

});

app.get("/register",function(req,res){

  
res.render("./register.ejs");
});

app.post("/registered",function(req,res){

var username = req.body.username;
var password = req.body.password;

Users.create({

     named:username,
     pass:password
     

}).then(()=>{

  res.redirect("/");

}).catch((msgErr)=>{

console.log(msgErr);

});
});










//server init

app.listen(8080,()=>{

console.log("Success");


});