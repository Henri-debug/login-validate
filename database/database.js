
const sequelize = require("sequelize")
const connection = new Sequelize("this_save","root","475011365",{

        host:'localhost',
        dialect:'mysql'



});

module.exports=connection;



