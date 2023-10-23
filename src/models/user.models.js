const db = require('../database/conect')
export default class UserModels {
    getNomeTodosUsuarios(req, res) {
        res.json({message:"Hello world"})
       // res.send("Hello")
    }


    todos_usuarios(req,res){
        

        let SQL = "SELECT * FROM usuario;"

        db.db.query(SQL,(err,result)=>{
            if(err) console.log(err,"")
            else console.log(result,"")
        })
    }

    usuario_por_nome(req,res){
        const {nome}=req.params;

        try{

            if(!nome){
                console.log("Problema na solicitacao de usuario pelo nome")
            } else {
                    let SQL = "SELECT * FROM usuario WHERE nome= LIKE ?;"
    
                    db.db.query(SQL,[`%${nome}%`],(err,result)=>{
                        if(err) console.log("")
                        else console.log("")
                    })
                }
            
        } catch(err){
            console.log("requisicao de usuario pelo nome")
        }
    }

    usuarios_por_email(req,res){
        const {email}=req.params

        try{
            if(!email){
                console.log("email esta vario")
            }else{
                let SQL="SELECT * FROM usuario WHERE email LIKE ?";
                db.db.query(SQL,[`%${email}%`],(err,result))
            }
        }catch(err){
            console.log(err,"erro ao executar operacao")
        }
    }


    actualiza_dados_usuario(req,res){
        try{
            if(!email || !nome){
                console.log("")
            }
        }catch(err){
            console.log("")
        }
    }


    inserir_novo_usuario(req,res){
        const {nome, email, senha1, senha2, funcao}=req.body;
        try{
            let SQL = "INSERT INTO usuario (nome, email, senha1, senha2, funcao) values (?,?,?,?,?)"
            db.db.query(SQL,[], (err,result)=>{
                console.log(err,"")
            })
        }catch(err){
            console.log(err,"o Erro...")
        }
    }

}