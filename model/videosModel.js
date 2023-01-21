const connection = require('../infrastructure/connection')
class Videos{
    list(res){
        const sql = 'SELECT * FROM tbVideos';
        connection.query(sql, (error, result) => {
            if(error){
                res.status(400).json(error);
            }else{
                res.status(200).json(result)
            }
        })
    }
    listId(cd_video, res){
        const sql = `SELECT * FROM tbVideos WHERE cd_video = ${cd_video}`;
        
        connection.query(sql, (error, result) => {
            const resultObj = result[0];
            const cont = result.length;
            if(error){
                res.status(400).json(error);
            }else if(cont){
                res.status(200).json(resultObj);
            }else{
                res.status(400).json('Não encontrado.')
            }
        })
    }
    create(dados, res){
            
        const validaTitulo = dados.titulo.length >= 10;
        const validaDescricao = dados.descricao.length >= 10;

        const validacoes = [
            {
                nome: 'titulo',
                valida: validaTitulo,
                mensagem: 'O titulo deve ter dez ou mais caracteres'
            },
            {
                nome: 'descricao',
                valida: validaDescricao,
                mensagem: 'A descrição deve ter dez ou mais caracteres'
            }
        ];

        const erros = validacoes.filter(campo => !campo.valida);
        const errosExistem = erros.length;

        if( errosExistem){
            res.status(400).json(erros)
        }else{
            const sql = 'INSERT INTO tbVideos SET ?'
            connection.query(sql, dados, (error, result) => {
                if(error){
                    res.status(400).json(error);
                }else{
                    res.status(200).json(dados);
                }
            })
        }
    }
}
module.exports = new Videos;