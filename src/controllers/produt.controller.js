const db=require('../database/conect')

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

    if(!armazem_idarmazem && !produto_nome && produto_formato, !data_emissao && !tempo && !produto_observacao){
        console.log("")
    }else{
        
        if (produto_nome != null && produto_nome != undefined){
            try{
                let SQL=""
            }catch(err){
                console.log(err)
            }
        }
        if(produto_formato != null && produto_formato != undefined){
            try{
                let SQL=""
            }catch(err){
                console.log(err)
            }
        }
        if(data_emissao != null && data_emissao != undefined){
            try{
                let SQL=""
            }catch(err){
                console.log(err)
            }
        }
        if(tempo != null && tempo != undefined){
            try{
                let SQL=""
            }catch(err){
                console.log(err)
            }
        }
        if(produto_observacao != null && produto_observacao != undefined){
            try{
                let SQL=""
            }catch(err){
                console.log(err)
            }
        }
    }
}



exports.apagar_produto_armazem=(req,res)=>{
    const {id}=req.params;
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