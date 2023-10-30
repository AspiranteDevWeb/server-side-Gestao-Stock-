const db=require('../database/conect')

exports.receber_tudo=(req,res)=>{
    
    let SQL="SELECT * FROM produto INNER JOIN armazem WHERE armazem.idarmazem= produto.armazerm_id";

    db.db.query(SQL,(err,result)=>{
        if(err)console.log(err,"")

        else res.status(200).json(result)
    })
}


exports.recebe_tudo_por_nome=(req,res)=>{
    const {produto_nome} =req.params

    let SQL="SELECT * FROM produto INNER JOIN armazem ON armazem.idarmazem=produto.armazem_id WHERE produto_nome LIKE?";

    db.db.query(SQL,[`%${produto_nome}%`],(err,result)=>{
        if(err) console.log(err)

        else res.status(200).json(result)
    })
}

exports.receber_tudo_por_formato=(req,res)=>{
    const {produto_formato} = req.params
    let SQL="SELECT * FROM produto INNER JOIN armazem ON armazem.idarmazem=produto.armazem_id WHERE produto_formato like?";

    db.db.query(SQL,[`%${produto_formato}%`],(err,result)=>{
        if(err)console.log(err)
        else res.status(200).json(result)
    })
}

exports.receber_tudo_por_formato_nome=(req,result)=>{
    const {produto_nome,produto_formato}=req.params

    let SQL="SELECT * FROM produto INNER JOIN armazem on armazem.idarmazem=produto.armazem_id where produto_nome=  LIKE? and produto_formato LIKE?";

    db.db.query(SQL,[`%${produto_formato,produto_nome}%`],(err,result)=>{
        if(err) console.log(err)

        else res.status(200).json(result)
    })
}

exports.soma_tempo_total=(req,res)=>{

    let SQL="select sec_to_time(sum(time_to_sec(tempo))) as tempototal from produto";

    db.db.query(SQL,(err,result)=>{
        if(err)console.log(err)

        else res.end(JSON.stringifye(result))
    })
}




exports.inserir_novo_produto_armazem=(req,res)=>{
    const {sala,gaveta,pratileira,corredor}=req.body;

    const {produto_nome, produto_formato, data_emissao, tempo, produto_observacao}=req.body;

    if(!sala && !gaveta && !pratileira && !corredor){
        console.log("nao recebe valor")
    } else{
        try{
            let SQL="INSERT INTO armazem (sala,gaveta,pratileira,corredor) VALUES (?,?,?,?);"

            db.db.query(SQL,[sala,gaveta,pratileira,corredor],(err,result)=>{
                console.log(err)
            })
        }catch(err){
            console.log(err)
        }
    }

    if(!produto_nome && !produto_formato && !data_emissao && !tempo && !produto_observacao){
        console.log("nao")
    }else{
        try{
            let SQL="INSERT INTO produto (produto_nome,produto_formato,tempo,data_emissao,produto_observacao) VALUES (?,?,?,?,?)";
            db.db.query(SQL,[produto_nome, produto_formato, tempo, data_emissao, produto_observacao],(err,result)=>{
                console.log(err,"")
            })
        }catch(err){
            console.log(err)
        }
    }
}


exports.update_produto_armazem=(req,res)=>{
    const {armazem_idarmazem, produto_nome, produto_formato, data_emissao, tempo, produto_observacao}=req.body;

    const {idarmazem, sala, gaveta, pratileira, corredor}=req.body;

    
        try {

            if (produto_nome != null && produto_nome != undefined){
                try{
                    let SQL="UPDATE produto SET produto_nome=? Where armazem_idarmazem=?";
                    db.db.query(SQL,[produto_nome,armazem_idarmazem],(err,result)=>{
                        if(err) console.log(err,"")
                        else console.log(result,"")
                    })
                }catch(err){
                    console.log(err)
                }
            }
            if(produto_formato != null && produto_formato != undefined){
                try{
                    let SQL="UPDATE produto SET produto_formato=? WHERE armazem_idarmazem=?";
                    db.db.query(SQL,[produto_formato,armazem_idarmazem],(err,result)=>{
                        if(err)console.log(err)
                        else console.log(result)
                    })
                }catch(err){
                    console.log(err)
                }
            }
            if(data_emissao != null && data_emissao != undefined){
                try{
                    let SQL="UPDATE produto SET data_emissao=? WHERE armazem_idarmazem=?";
                    db.db.query(SQL,[data_emissao,armazem_idarmazem],(err,result)=>{
                        if(err)console.log(err)
                        else console.log(result)
                    })
                }catch(err){
                    console.log(err)
                }
            }
            if(tempo != null && tempo != undefined){
                try{
                    let SQL="UPDATE produto SET tempo=? WHERE armazem_idarmazem=?";

                    db.db.query(SQL,[tempo,armazem_idarmazem],(err,result)=>{
                        if(err)console.log(err)
                        else console.log(result)
                    })
                }catch(err){
                    console.log(err)
                }
            }
            if(produto_observacao != null && produto_observacao != undefined){
                try{
                    let SQL="UPDATE produto SET produto_observacao=? WHERE armazem_idarmazem=?";

                    db.db.query(SQL,[produto_observacao,armazem_idarmazem],(err,result)=>{
                        if(err)console.log(err)
                        else console.log(result)
                    })
                }catch(err){
                    console.log(err)
                }
            }


            if(sala != null && sala !=undefined){
                try{
                    let SQL="UPDATE armazem SET sala=? WHERE idarmazem=?";

                    db.db.query(SQL,[sala,idarmazem],(err,result)=>{
                        if(err) console.log(err)
                        else console.log(result)
                    })
                }catch (err){
                    console.log(err)
                }
            }
            if(gaveta != null && gaveta !=undefined){
                try{
                    let SQL="UPDATE armazem SET gaveta=? WHERE idarmazem=?";

                    db.db.query(SQL,[gaveta,idarmazem],(err,result)=>{
                        if(err)console.log(err)
                        else console.log(result)
                    })
                }catch(err){
                    console.log(err)
                }
            } 
            if(pratileira != null && pratileira !=undefined){
                try{
                    let SQL ="UPDATE armazem SET pratileira=? WHERE idarmazem=?";

                    db.db.query(SQL,[pratileira,idarmazem],(err,result)=>{
                        if(err)console.log(err)
                        else console.log(result)
                    })
                }catch(err){
                    console.log(err)
                }
            }
            if(corredor != null && corredor !=undefined){
                try{
                    let SQL="UPDATE armazem SET corredor=? WHERE idarmazem=?";

                    db.db.query(SQL,[corredor,idarmazem],(err,result)=>{
                        if(err)console.log(err)
                        else console.log(result)
                    })
                }catch(err){
                    console.log(err)
                }
            }
        }catch(err){
            console.log(err)
        }
    
}



exports.apagar_produto_armazem=(req,res)=>{
    const {armazem_idarmazem, idarmazem}=req.params;
    try{
        let SQL="DELETE FROM produto WHERE armazem_idarmazem=?";

        db.query(SQL,[id],(err,result)=>{
            if(err) console.log(err)
            else res.send(result)
        })

        
    }catch(err){
        console.log('dtfygh')
    }

    try{
        let SQL1="DELETE FROM armazem WHERE idarmazem=?";

        db.query(SQL1,[id],(err,result)=>{
            if(err) console.log(err)
            else res.send(result)
        })
    }catch(err){
        console.log(err)
    }
}