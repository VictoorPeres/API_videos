module.exports = app => {
    app.get('/categorias', (req, res) => {
        res.send('Esta é a rota GET de categorias');
    });
}