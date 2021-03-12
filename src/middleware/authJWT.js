const jwt = require('jsonwebtoken')
const config = require('../../config')
const connection = require('../dbConnection')
const verifyToken = (req, res, next) => {

    const token = req.headers['token-access'] // Obtengo el token del request header

    if(!token) res.status(403).json({message:"No token provided"}) // if the token dosen't exists return 403

    jwt.verify(token, config.SECRET, async (err, decoded) => {

        if(err) res.status(401).json({message:"not authorized"}) // if exists but is expired return 401
        
        else {
            const client = await  connection.getClient()
            client.connect()
            const resultSet = client.query(`select 1 from "Esq"."users" where email = '${decoded.email}'`)

            if (!resultSet.rowCount) res.status(401).json({message:"not authorized"}) // if is not expired but the email-user decoded dosen't exists return 401

            else next() // if exists, its not expired and the user-email decoded exists

        }

    } )

}


module.exports = {
    verifyToken
}