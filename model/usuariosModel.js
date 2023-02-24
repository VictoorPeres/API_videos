const connection = require('../infrastructure/connection');

class Usuario{
    create(dados, res){
        const sql = 'INSERT INTO tbUsuarios SET ?';
        connection.query(sql, dados, (error, result) => {
            if(error){
                res.status(401).json(error);
            }else{
                res.status(201).json('Cadastro realizado com sucesso')
            }
        })
    }
}

module.exports = new Usuario;