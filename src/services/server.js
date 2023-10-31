//import express from "express";
const express=require("express")
const dotenv = require('dotenv')
dotenv.config() 
//require('dotenv').config() se nao funcionar use isto
//import router from "../routes/router";
//const router = require("../routes/router")
const app = express()

const cors=require("cors")
//const mysql=require("mysql2")


//require("../routes/router") //================================
 
//const Porta=3000 || process.env.PORT
const Porta=3000 || `${process.env.PORT}`

app.use(cors())
app.use(express.json())

//app.use(router)//middleware
app.use(require("../routes/router"),(res,req,next)=>{
    if (err)console.log(err)
    else console.log(res)
    next()
})//=====================


app.listen(Porta,()=>{
    console.log("Servidor inicializado na porta ",  `${Porta}`)
})