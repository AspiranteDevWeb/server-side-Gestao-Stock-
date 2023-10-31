const mysql=require("mysql2")

const db=mysql.createConnection({
    host:"localhost",  //=process.env.MYSQL_HOST
    user:"root",  //==process.env.MYSQL_USER
    password:"",  //==process.env.MYSQL_PASSWORD
    database:"bd_sistema_gestao_2023"  //==process.env.MYSQL_DATABASE
})

module.exports= {db}

//exports.db=db;

//module.exports=db