const sequelize = require("sequelize")
const connection = require("./database")

const Info = connection.define('info',{

        info:{    
            type:sequelize.STRING,
            allowNULL:false
            }


});


Info.sync({force:false}).then(()=>{

      console.log("Sync Success");



}).catch((msgg)=>{

   console.log(msgg);


});

module.exports = Info;
