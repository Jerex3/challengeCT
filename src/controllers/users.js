const config = require('../../config')
const jwt = require('jsonwebtoken');
const moment = require('moment');
const poolCon = require('../dbConnection/pool')
const modify = require('../auxFunctions/createUpdateQuery')

const createUser = async (req, res) => { // Sing up 

    const {name, email, birthdate, prefLeng, password} = req.body

    const client = await poolCon.connect()


    await client.query(`insert into "Esq"."users" values ('${name}', '${email}', '${birthdate}', '${prefLeng ? prefLeng : null}', '${password}' )`)
    .catch(e => {
        res.status(409).json({message:'An error occurs'})
     })

    client.release()
    
    const token = jwt.sign({email}, config.SECRET,{
        expiresIn:config.EXPIRE_TIME
    })

    res.status(200).json({token})

}
      


const deleteUser = async (req, res) => {

    const userEmail = req.params.email;

    const client = await poolCon.connect()

    
    await client.query(`delete from "Esq"."users" where email = '${userEmail}'`)
    .catch(e => res.status(409).json({message:'an error occurs'}))

     client.release()
    
    res.status(200).json({message:'user correctly deleted'})

}

const modifyUser = async (req, res) => {

    const userEmail = req.params.email

    const client = await poolCon.connect()
    
    await client.query(`update "Esq"."users" ${modify.createUpdateQuery(req.body)} where email = '${userEmail}'`)
    .catch(e => res.status(409).json({message:'an error occurs'}))
    
    client.release()

    res.status(200).json({message:'user correctly modified'})


}

const getUserById = async (req, res) => {

    const userEmail = req.params.email;

    const client = await poolCon.connect()

    const Resultset = await client.query(`select * from "Esq"."users" where email = '${userEmail}'`)
    .catch(e => res.status(409).json({message:'an error occurs'}))

    client.release()

    res.status(200).json({data:Resultset.rows})
    

} 


const signIn = async (req, res) => { // Login

    const { email } = req.body // If im here my email and password are

    const token = jwt.sign({email}, config.SECRET,{ 
        expiresIn:config.EXPIRE_TIME
    })

    const client = await poolCon.connect()


    const nowDate = moment(new Date()).format('YYYY-MM-DD HH:mm:ss') // Transform now Date into timestamp

    await client.query(`insert into "Esq"."logHistory" values ('${nowDate}', 'login', '${email}' )`) // Insert into logHistory
    
    client.release()
    
    res.status(200).json({token}) // Create Token
        
}

const getUsers = async (req, res) => {

    const client = await poolCon.connect()

    const Resultset = await client.query(`select * from "Esq"."users"`)
    .catch(e => res.status(409).json({message:'an error occurs'}))

    client.release()

    res.status(200).json({data:Resultset.rows})
}


module.exports = {
    createUser,
    deleteUser,
    modifyUser,
    getUserById,
    signIn,
    getUsers
}