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
            const cont = result.length;
            if(error){
                res.status(400).json(error);
            }else if(cont){
                res.status(200).json(resultObj);
            }else{
                res.status(400).json('Não encontrado.')
            }
        })
    }
}
module.exports = new Videos;