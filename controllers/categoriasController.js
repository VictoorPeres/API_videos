const Categoria = require('../model/categoriasModel');
module.exports = app => {
    app.get('/categorias', (req, res) => {
        Categoria.list(res);
    });
}