const jwt = require('jsonwebtoken')
const poolCon = require('../dbConnection/pgPool')
const config = require('../../config')

const authCredentials = async (req, res, next) => {

    const {email, password} = req.body

    const client = await poolCon.connect()

    const resultSet = await client.query(`select * from "Esq"."users" Where email = '${email}'`)

    client.release()


    if(!resultSet.rows.length) return res.status(404).json({message:'User not found'})

    if (resultSet.rows[0].password === password) next()

    else{

        return res.status(401).json({message:"Invalid Credentials"})

    }

}   

module.exports = {
    verify:authCredentials
}