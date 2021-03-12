const jwt = require('jsonwebtoken')
const connection = require('../dbConnection')
const config = require('../../config')

const authCredentials = async (req, res, next) => {

    const {email, password} = req.body

    const client = await connection.getClient()

    client.connect()
    
    const resultSet = await client.query(`select * from "Esq"."users" Where email = '${email}'`)

    client.end()


    if(!resultSet.rows.length) return res.status(404).json({message:'User not found'})

    if (resultSet.rows[0].password === password) next()

    else{

        return res.status(401).json({message:"Invalid Credentials"})

    }

}   

module.exports = {
    authCredentials
}