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
    listId(cd_video, res){
        const sql = `SELECT * FROM tbVideos WHERE cd_video = ${cd_video}`;
        
        connection.query(sql, (error, result) => {
            const resultObj = result[0];
            
            if(error){
                res.status(400).json(error);
            }else{
                res.status(200).json(resultObj);
            }
        })
    }
}
module.exports = new Videos;