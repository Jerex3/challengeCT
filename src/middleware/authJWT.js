const jwt = require('jsonwebtoken')
const config = require('../../config')

const verifyToken = (req, res, next) => {

    const token = req.headers['token-access']

    if(!token) res.status(403).json({message:"No token provided"})

    jwt.verify(token, config.SECRET, (err, decoded) => {

        if(err) res.status(401).json({message:"not authorized"})
        
        else next()

    } )

}


module.exports = {
    verifyToken
}