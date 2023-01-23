const Videos = require('../model/videosModel');

module.exports = app => {
    app.get('/videos', (req, res) => {
    Videos.list(res);        
    });

    app.get('/video/:id', (req, res) => {
        const cd_video = parseInt(req.params.id);
        Videos.listId(cd_video, res);
    })

    app.post('/video', (req, res) => {
        Videos.create(req.body, res);
    })

    app.put('/video/:id', (req, res) => {
        const id = parseInt(req.params.id);
        const dadosVideo = req.body;
        Videos.update(id, dadosVideo, res);
    })

    app.delete('/video/:id', (req, res) => {
        const id = parseInt(req.params.id);
        Videos.delete(id, res);
    })
}

