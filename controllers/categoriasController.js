const Categoria = require('../model/categoriasModel');
module.exports = app => {
    app.get('/categorias', (req, res) => {
        Categoria.list(res);
    });
    app.get('/categoria/:id', (req, res) => {
        const id = parseInt(req.params.id);
        Categoria.listId(id, res);
    });
}