const express=require("express")
const app=express()
const cors=require("cors")
const mysql=require("mysql2")

const db=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:""
})
 const port= 3000 || process.env.PORT
app.use(cors())
app.use(express.json())

app.listen(port,()=>{
    console.log("Servidor iniciado na porta ", `${port}`)
})