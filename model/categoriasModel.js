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
}

module.exports = new Categoria;