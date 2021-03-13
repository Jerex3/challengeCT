const poolCon = require('../dbConnection/pool')



const getLogs = async (req, res) => {

    const client = await poolCon.connect()

    const resultSet = await client.query('SELECT * FROM "Esq"."logHistory"')
    .catch(err => res.status(409).json({message: 'an error occurs'}))

    client.release()

    res.status(200).json({data:resultSet.rows})

}

module.exports = {
    getLogs
}