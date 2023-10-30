import express from "express";

const dotenv = require('dotenv')
dotenv.config() 
//require('dotenv').config() se nao funcionar use isto
import router from "../routes/router";

const app = express()

const cors=require("cors")
//const mysql=require("mysql2")

 
//const Porta=3000 || process.env.PORT
const Porta=3000 || `${process.env.PORT}`

app.use(cors())
app.use(express.json())

app.use(router)

app.listen(Porta,()=>{
    console.log("Servidor inicializado na porta ",  `${Porta}`)
})