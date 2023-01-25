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
    create(dadosCategoria, res){
        const sql = 'INSERT INTO tbCategorias SET ?';
        const {titulo, cor} = dadosCategoria;
        const validaTitulo = titulo.length >= 3;
        const validaCor = cor.length == 7;

        const validacoes = [
            {
                nome: 'titulo',
                valida: validaTitulo,
                mensagem: 'O título deve ter três ou mais caracteres'
            },
            {
                nome: 'cor',
                valida: validaCor,
                mensagem: 'A cor deve ter sete caracteres'
            }
        ];
        const erros = validacoes.filter(campo => !campo.valida);
       // const errosExistem = erros.length;
        if(erros.length){
            res.status(400).json(erros);
        }else{
            connection.query(sql, dadosCategoria, (error, result) => {
                if(error){
                    res.status(400).json(erro);
                }else{
                    res.status(200).json(dadosCategoria);
                }
            })
        }
    }
}

module.exports = new Categoria;