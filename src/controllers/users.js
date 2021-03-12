const connection = require('../dbConnection');
const config = require('../../config')
const jwt = require('jsonwebtoken');
const moment = require('moment');


const createUser = async (req, res) => { // Sing up 

    const {name, email, birthdate, prefLeng, password} = req.body

    const client = await connection.getClient()

    client.connect()

    await client.query(`insert into "Esq"."users" values ('${name}', '${email}', '${birthdate}', '${prefLeng ? prefLeng : null}', '${password}' )`)
    .catch(e => {
        res.status(409).json({message:'An error occurs'})
     })

     client.end()
    
    const token = jwt.sign({email}, config.SECRET,{
        expiresIn:config.EXPIRE_TIME
    })

    res.status(200).json({token})

}
      


const deleteUser = (req, res) => {

}

const modifyUser = (req, res) => {

}

const getUserById = (req, res) => {

} 


const singIn = async (req, res) => { // Login

    const { email } = req.body // If im here my email and password are

    const token = jwt.sign({email}, config.SECRET,{ 
        expiresIn:config.EXPIRE_TIME
    })

    const client = await connection.getClient()

    client.connect()

    const nowDate = moment(new Date()).format('YYYY-MM-DD HH:mm:ss') // Transform now Date into timestamp

    await client.query(`insert into "Esq"."logHistory" values ('${nowDate}', 'login', '${email}' )`) // Insert into logHistory
    
    res.status(200).json({token}) // Create Token
        
    

}


module.exports = {
    createUser,
    deleteUser,
    modifyUser,
    getUserById,
    singIn
}