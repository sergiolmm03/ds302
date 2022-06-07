
const { pool } = require("./db");

async function selectData(res1) {
  try {
    const res = await pool.query(`SELECT * FROM Users;`, (err, res) => {
        if (err) {
            console.log("Error - Failed to select all from Users");
            console.log(err);
        }
        else{
            
            resp = res.rows
            console.log(resp);
            res1.status(200).send(res.rows);
            return resp;
        }
    });
    
  } catch (error) {
    console.error(error)
  }
}

async function selectData2(res1,id) {
    try {
      const res = await pool.query('SELECT * FROM Users where id =  $1', [id], (err, res) => {
          if (err) {
              console.log("Error - Failed to select all from Users");
              console.log(err);
          }
          else{            
              resp = res.rows
              console.log(resp);
              res1.status(200).send(res.rows);
          }
      });
      
    } catch (error) {
      console.error(error)
    }
  }
  

module.exports = { selectData, selectData2 };

//selectData()