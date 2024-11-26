const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'btl-cnpm.mysql.database.azure.com',
    user: 'admin01',
    password: 'Admin123',
    database: 'hcmut_spss',
    port: 3306,
    ssl: {
      rejectUnauthorized: true
    }
  });

module.exports = connection;
