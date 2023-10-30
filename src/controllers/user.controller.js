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
        const {id,nome,email,senha1,senha2,funcao}=req.body
        try{

            if(email==undefined || email==null){
                console.log("")
            }else{
                let SQL ="UPDATE usuario SET email =? WHERE id =?";

                db.db.query(SQL,[email,id],(err,result)=>{
                    if(err)console.log(err,"")
                    else console.log(result)
                })
                
            }

            if(nome==undefined || nome == null){
                console.log("")
            }else{
                let SQL="UPDATE usuario SET nome=? WHERE id=?"

                db.db.query(SQL,[nome,id],(err,result)=>{
                    if(err) console.log(err)
                    else console.log(result)
                })
            }

            if(senha1 == undefined || senha1 == null){
                console.log("")
            }else{
                let SQL="UPDATE usuario SET senha1 = ? WHERE id = ?";

                db.db.query(SQL,[senha1,id],(err,result)=>{
                    if(err) console.log(err)
                    else console.log(result)
                })
            }

            if(senha2 == undefined ||senha2 == null){
                console.log("")
            }else{
                let SQL="UPDATE usuario SET senha2=? WHERE id=?";

                db.db.query(SQL,[senha2,id],(err,result)=>{
                    if(err)console.log(err)
                    else console.log(result)
                })
            }

            if(funcao == undefined || funcao ==null){
                console.log("")
            }else{
                let SQL="UPDATE usuario SET funcao=? WHERE id=?";

                db.db.query(SQL,[funcao,id],(err,result)=>{
                    if(err)console.log(err)
                    else console.log(result)
                })
            }
        }catch(err){
            console.log("")
        }
    }


    exports.inserir_novo_usuario=(req,res)=>{
        const {nome, email, senha1, senha2, funcao}=req.body;
        try{
            let SQL = "INSERT INTO usuario (nome, email, senha1, senha2, funcao) values (?,?,?,?,?)"
            db.db.query(SQL,[nome, email, senha1, senha2, funcao], (err,result)=>{
                //db.release()para terminar requisicoes
                if(err)console.log(err,"")

                //else res.status(200)
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
            console.log(err,"dtfygh")
        }
    }

