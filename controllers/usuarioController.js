const Usuario = require('../model/usuariosModel');
module.exports = app => {
    app.post('/cadastro-usuario', (req, res) => {
        console.log(req.body);
        Usuario.create(req.body, res);
    })
}