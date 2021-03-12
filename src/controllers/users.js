const connection = require('../dbConnection');
const config = require('../../config')
const jwt = require('jsonwebtoken');

const getUsers = (req, res) => {

}

const createUser = async (req, res) => {

    const {name, email, birthDate, prefLeng, password} = req.body

    console.log(req.body)



    const client = await connection.getClient()

    client.connect()

    await client.query(`insert into "Esq"."users" values ('${name}', '${email}', '${birthDate}', '${prefLeng}', '${password}' )`)
    .catch(e => {
        res.status(409).json({message:'An error occurs'})
     })
    
    const token = jwt.sign({email}, config.SECRET,{
        expiresIn:80000
    })

    res.status(200).json({token})


    }
      






const deleteUser = (req, res) => {

}

const modifyUser = (req, res) => {

}

const getUserById = (req, res) => {

} 

const authUser = async (req, res) => {

    const { email } = req.body

        const token = jwt.sign({email}, config.SECRET,{
            expiresIn:80000
        })

    res.status(200).json({token})
        
    

}


module.exports = {
    createUser,
    getUsers,
    deleteUser,
    modifyUser,
    getUserById,
    authUser
}