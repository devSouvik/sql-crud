var config = require('./dbconfig.js');
const sql = require('mssql');


// This function is used to connect to the database.
// It returns a promise.
async function getOrders() {
    try{
        let pool = await sql.connect(config);
        let products = await pool.request().query('SELECT * FROM dbo.Orders');
        return [products.recordset, null];
    }
    catch(err){
        console.log(err)
}
}

module.exports = {getOrders: getOrders};
