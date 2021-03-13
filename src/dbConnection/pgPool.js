const { Pool } = require('pg');
const CONFIG = require("../../config")
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

module.exports = pool;