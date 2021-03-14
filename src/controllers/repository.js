const moment = require('moment')
const modify = require('../auxFunctions/createUpdateQuery')
const poolCon = require('../dbConnection/pgPool')


const createRep = async (req, res) => {

    const {proyectname, lenguaje, description} = req.body;

    const client = await poolCon.connect()

    const nowDate = moment(new Date()).format('YYYY-MM-DD HH:mm:ss') // Transform now Date into timestamp

    await client.query(`insert into "Esq"."repositories" values ('${proyectname}', '${lenguaje}', '${nowDate}', '${description}' )`)
    .catch(e => res.status(409).json({message:'An error occurs'}))

    client.release()

    res.status(200).json({message:'Correctly inserted'})


}

const getReps = async (req, res) => {

    
    const client = await poolCon.connect()

    const Resultset = await client.query(`select * from "Esq"."repositories"`)
    
    res.json({repositories:Resultset.rows})

    client.release()

}

const getRep = async (req, res) => {

    const repoName = req.params.id

    const client = await  poolCon.connect()
    
    const resultSet = await client.query(`select * from "Esq"."repositories" where proyectname = '${repoName}'`)
    .catch(e => res.status(409).json({message:'an error occurs'}))

    client.release()

    res.status(200).json({data:resultSet.rows})

}

const deleteRep = async (req, res) => {

    const repoName = req.params.id

    const client = await poolCon.connect()


    await client.query(`delete from "Esq"."repositories" where proyectname = '${repoName}'`)
    .catch(e => res.status(409).json({message:'an error occurs'}))

    client.release()

    res.status(200).json({message:`The repositorie ${repoName} was correctly deleted`})
}

const modifyRep = async (req, res) => {


    const repoName = req.params.id

    const client = await poolCon.connect()
    


    await client.query(`update "Esq"."repositories" ${modify.createUpdateQuery(req.body)} where proyectname = '${repoName}'`)
    .catch(e => res.status(409).json({message:'an error occurs'}))
    
    client.release()

    res.status(200).json({message:'Repo correctly modified'})


}

module.exports= {
    createRep,
    getRep,
    getReps,
    deleteRep,
    modifyRep
}