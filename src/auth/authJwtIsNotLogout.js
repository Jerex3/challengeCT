const redisCon = require('../dbConnection/redis')
const jwt = require('jsonwebtoken')
const config = require('../../config')
const redis = require('../dbConnection/redis')




const verifyNotLogout = (req, res, next) => {

    const token = req.headers['token-access']
    
    jwt.verify(token, config.SECRET, (err, decoded) => {

        redis.get(decoded.email, (err, reply) => {

            if(reply != null && reply == token){
                next()
            }
            else{
                res.status(401).json({message:"unauthorized"})

            }

        })


    })




}


module.exports = {
    verify:verifyNotLogout
}