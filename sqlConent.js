/*
npm install -S mssql
*/
var sql = require("mssql");
// config for your database
var config = {
    user: 'sergio', // u21
    password: 'sergio',
    server: 'regulus', 
    database: 'sergio' , //21
    options: {
        trustedConnection: true,
        encrypt: true,
        enableArithAbort: true,
        trustServerCertificate: true,    
      },
};

// connect to your database
sql.connect(config, function (err) {

    if (err) console.log(err);
     // create Request object
     var request = new sql.Request();
     // query to the database and get the records
     request.query('select * from aluno', function (err, recordset) {
         
         if (err) console.log(err)

         // send records as a response
         console.log(recordset);
         
     });
});
