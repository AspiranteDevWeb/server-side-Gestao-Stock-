import { Router } from "express";
//const UserModels = require("UserModels")
import UserModels from "../models/user.models";

const router=Router()


//users routers
router.get("/buscar_usuario",(req,res)=>{})

router.get("/buscar_usuario_id:levar",(req,res)=>{
    res.send("Hello")
})

router.post("/Enviar_login",(req,res)=>{})

router.post("/signup",(req,res)=>{})

router.get("/awsredtf",(req,res)=>{})


//produts routes

router.get("/produto",(req,res)=>{})
router.get("/armazem",(req,res)=>{})
router.get("produto/:id",(req,res)=>{})
router.get("produto/:id/:nome",(req,res)=>{})
router.get("armazem/:id",(req,res)=>{})
//ou
const UserModels=new UserModels()
router.get("/",UserModels.getNomeTodosUsuarios())

export default router


/*
API com Node.JS - Passo 2 - Criando as rotas (Atualizado)

Tenho algumas sugestões:


1 - Poderia reduzir o código, removendo o arquivo server.js. Não é necessário criar um server do módulo http, o express já faz isso sozinho
2 - Na rota do produto poderia usar o route:
router.route('/produtos/:id_produto')
    .get((req, res) => {
        //TODO
    })
    .delete((req, res) => {
        //TODO
    });


router.route('/produto')
    .get((req, res) => {
        //TODO
    })
    .post((req, res) => {
        //TODO
    })
    .put((req, res) => {
        //TODO
    });
3 - No arquivo app.js poderia criar um array de rotas e simplificaria o código:
const rota_produto = require('./rotas/protudo');
const rota_outra = require('./rotas/outra');


rotas = [
    rota_produto,
    rota_outra
];


app.use('/', rotas);Tenho algumas sugestões:


1 - Poderia reduzir o código, removendo o arquivo server.js. Não é necessário criar um server do módulo http, o express já faz isso sozinho
2 - Na rota do produto poderia usar o route:
router.route('/produtos/:id_produto')
    .get((req, res) => {
        //TODO
    })
    .delete((req, res) => {
        //TODO
    });


router.route('/produto')
    .get((req, res) => {
        //TODO
    })
    .post((req, res) => {
        //TODO
    })
    .put((req, res) => {
        //TODO
    });
3 - No arquivo app.js poderia criar um array de rotas e simplificaria o código:
const rota_produto = require('./rotas/protudo');
const rota_outra = require('./rotas/outra');


rotas = [
    rota_produto,
    rota_outra
];


app.use('/', rotas);
*/