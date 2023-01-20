module.exports = app => {
    app.get('/videos', (req, res) => {
        res.send('Rota GET que lista todos os videos');
    });
}

