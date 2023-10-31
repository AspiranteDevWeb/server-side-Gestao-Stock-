const express=require("express")
//import { Router } from "express";
//const Router=require(".Router")
const controller = require('../controllers/user.controller')
const controller1= require('../controllers/produt.controller')
//import { Router } from "express";
//const UserModels = require("../models/user.models")

//import UserModels from "../models/user.models";
//const UserModels=require("../controllers")
//const UserModels=new UserModels()

const router=express.Router()


//users routers
router.get("/buscar_usuario",controller.todos_usuarios)

//router.get("/buscar_usuario",UserModels.todos_usuarios()) <=> desse jeito ele nao espera ser chamado e executa logo

router.get("/buscar_usuario_id/:nome",controller.usuario_por_nome)

router.get("/buscar_usuario_id/:email",controller.usuarios_por_email)

router.put("/update_usuario/:id",controller.actualiza_dados_usuario)

router.post("/signup_novo_usuario",controller.inserir_novo_usuario)

router.delete("/delete_usuario",controller.apagar_usuario)
//router.get("/awsredtf",(req,res)=>{})


//produts routes

router.get("/produto_armazem",controller1.receber_tudo)
router.get("/armazem_armazem/:nome",controller1.recebe_tudo_por_nome)
router.get("/produto_armazem/:id",controller1.receber_tudo_por_formato)
router.get("/produto_armazem/:id/:nome",controller1.receber_tudo_por_formato_nome)
router.get("/somaTempoTotal/",controller1.soma_tempo_total)

router.post("/novo_produto_armazem",controller1.inserir_novo_produto_armazem)
router.put("/actualiza_produto_armazem/:id",controller1.update_produto_armazem)
router.delete("/delete_produto_armazem/:id",controller1.apagar_produto_armazem)
//ou

//router.get("/",UserModels.getNomeTodosUsuarios)

//exports.router
module.exports=router

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