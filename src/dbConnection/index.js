const { Client } = require('pg')
const CONFIG = require('../../config')



const getClient =  async () => {

    const client = new Client({
        user:CONFIG.user,
        password:CONFIG.password,
        port:CONFIG.port,
        database:CONFIG.database,
        host:CONFIG.host,
        ssl:{
            rejectUnauthorized:false
        }
    })

      return client

    
}

exports.getClient = getClient;
    

  





