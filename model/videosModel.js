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
                res.status(400).json('Vídeo não encontrado.')
            }
        })
    }
    create(dados, res){
            
        const validaTitulo = dados.titulo.length >= 10;
        const validaDescricao = dados.descricao.length >= 10;
        const validaURL = dados.url.length > 20;

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
            },
            {
                nome: 'url',
                valida: validaURL,
                mensagem: 'Digite uma url válida'
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
    update(cd_video, dadosVideo, res){
        const sql = 'UPDATE tbVideos SET ? WHERE cd_video = ?';
        connection.query(sql, [dadosVideo, cd_video], (error, result) => {
            
            if(error){
                res.status(400).json(error);
            }
            else{
                res.status(200).json(dadosVideo);
            }
        });
    }
    delete(cd_video, res){
        const sql = 'DELETE FROM tbVideos WHERE cd_video = ?';
        connection.query(sql, cd_video, (error, result) => {
            if(error){
                res.status(400).json(error);
            }
            else if(result.affectedRows ===1){
                res.status(200).json('Exclusão realizada.');
            }else{
                res.status(400).json('Vídeo não encontrado');
            }
        })
    }
}
module.exports = new Videos;