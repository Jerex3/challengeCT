const {Pool} = require('pg')
const CONFIG = require('../../config')

const getClient =  async () => {

    const pool = new Pool({
        user:CONFIG.user,
        password:CONFIG.password,
        port:CONFIG.port,
        database:CONFIG.database,
        host:CONFIG.host,
        ssl:{
            rejectUnauthorized:false
        }
    })

     return pool.connect()
   
}



exports.getClient = getClient;
    

  





