const connection = require('../infrastructure/connection');
class Categoria{
    list(res){
        const sql = 'SELECT * FROM tbCategorias';
        connection.query(sql, (error, result) => {
            if(error){
                res.status(400).json(error);
            }else if(result.length){
                res.status(200).json(result);
            }else{
                res.status(400).json('Não ha categorias cadastradas');
            }
        })
    }
    listId(cd_categoria, res){
        const sql = 'SELECT * FROM tbCategorias WHERE cd_categoria = ?';
        connection.query(sql, cd_categoria, (error, result) => {
            const resultObj = result[0];
            if(error){
                res.status(400).json(error);
            }else if(result.length){
                res.status(200).json(resultObj);
            }else{
                res.status(400).json('Categoria não encontrada');
            }
        })
    }
}

module.exports = new Categoria;