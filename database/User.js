const sequelize = require("sequelize")
const connection = require("./database")

const Users = connection.define("Users",{
 
           named:{
               type:sequelize.STRING,
               allowNull:false
           },
           pass:{
 
               type:sequelize.STRING,
               allowNull:false
           }
  
});

Users.sync({force:false}).then(()=>{

      console.log("Sync Users Success")



}).catch((msgError)=>{

      console.log(msgError);


});

module.exports = Users;