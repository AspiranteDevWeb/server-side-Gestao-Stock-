import express from "express";

const app = express()

const cors=require("cors")
const mysql=require("mysql2")

const Porta=3000 || process.env.PORT

app.use(cors())
app.use(express.json())

app.listen(Porta,()=>{
    console.log("Servidor inicializado na porta ",  `${Porta}`)
})