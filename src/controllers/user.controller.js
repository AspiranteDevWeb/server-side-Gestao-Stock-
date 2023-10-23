//import { release } from 'os'

const db = require('../database/conect')

//ou  const db = require('../database/conect').db  assim recebe directamente o db que esta a importar 
//e nao so o arquivo para armazenar na const db que recebe o request. Nao sera preciso fazer (db.db.query)

   /**  getNomeTodosUsuarios(req, res) {
        res.json({message:"Hello world"})
       // res.send("Hello")
    }
*/


    exports.todos_usuarios=(req,res)=>{
        

        let SQL = "SELECT * FROM usuario;"

        db.db.query(SQL,(err,result)=>{
            if(err) console.log(err,"")
            else console.log(result,"")
        })
    }

    exports.usuario_por_nome=(req,res)=>{
        const {nome}=req.params;

        try{

            if(!nome || nome==undefined || nome==null){
                console.log("Problema na solicitacao de usuario pelo nome")
            } else {
                    let SQL = "SELECT * FROM usuario WHERE nome LIKE ?;"
    
                    db.db.query(SQL,[`%${nome}%`],(err,result)=>{
                        if(err) console.log("")
                        else console.log("")
                    })
                }
            
        } catch(err){
            console.log("requisicao de usuario pelo nome")
        }
    }

    exports.usuarios_por_email=(req,res)=>{
        const {email}=req.params

        try{
            if(!email || email == undefined || email== null){
                console.log("email esta vario")
            }else{
                let SQL="SELECT * FROM usuario WHERE email LIKE ?";
                db.db.query(SQL,[`%${email}%`],(err,result))
            }
        }catch(err){
            console.log(err,"erro ao executar operacao")
        }
    }


    exports.actualiza_dados_usuario=(req,res)=>{
        try{
            if(!email || !nome){
                console.log("")
            }
        }catch(err){
            console.log("")
        }
    }


    exports.inserir_novo_usuario=(req,res)=>{
        const {nome, email, senha1, senha2, funcao}=req.body;
        try{
            let SQL = "INSERT INTO usuario (nome, email, senha1, senha2, funcao) values (?,?,?,?,?)"
            db.db.query(SQL,[], (err,result)=>{
                //db.release()para terminar requisicoes
                console.log(err,"")
            })
        }catch(err){
            console.log(err,"o Erro...")
        }
    }

    exports.apagar_usuario=(req,res)=>{
        const {id}=req.params;
        try{
            let SQL="DELETE FROM usuario WHERE id_usuario=?";

            db.query(SQL,[id],(err,result)=>{
                if(err) console.log(err)
                else res.send(result)
            })

           
        }catch(err){
            console.log('dtfygh')
        }
    }

