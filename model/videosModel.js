const connection = require('../infrastructure/connection')
class Videos{
    list(res){
        const sql = 'SELECT * FROM tbVideos';
        connection.query(sql, (error, result) => {
            if(error){
                res.status(400).json(error);
            }else{
                res.status(200).json(result)
            }
        })
    }
}
module.exports = new Videos;