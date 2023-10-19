import express from "express";

const app = express()

const Porta=3000 || process.env.PORT

app.listen(Porta,()=>{
    console.log("Servidor inicializado na porta ",  `${Porta}`)
})