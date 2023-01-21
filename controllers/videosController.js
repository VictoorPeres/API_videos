const Videos = require('../model/videosModel');

module.exports = app => {
    app.get('/videos', (req, res) => {
    Videos.list(res);        
    });

    app.get('/videos/:id', (req, res) => {
        const cd_video = parseInt(req.params.id);
        Videos.listId(cd_video, res);
    })
}

