const CONFIG = require('./config.js')

const con = require('./src/dbConnection')

const query2 = `select * from "Esq"."Usuarios";`

const func = async () => {
    
    //const cls = await con.getClient()
   const ab = await con.getClient()
   console.log(ab)

   console.log(ab)

    cls.query(query2).then((res, err) => {

        for (let row of res.rows) {
            console.log(JSON.stringify(row));
          }

    })

}
func()


const creationQuery = `insert into "Esq"."Usuarios" Values ('Jeremias','jeeremanuell@gmail.com','1980-01-01','javascript','231')`


    








