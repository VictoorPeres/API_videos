const Videos = require('../model/videosModel');

module.exports = app => {
    app.get('/videos', (req, res) => {
    Videos.list(res);        
    });
}

