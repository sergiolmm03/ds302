const { Pool} = require('pg')

const pool = new Pool({
  connectionString: "postgres://tckffnnvzulblb:3818ceea34b6f95eb8b15968771643ffab34df2db16a3208763a8a6272f97288@ec2-3-234-131-8.compute-1.amazonaws.com:5432/d7i5d877obafpq",
  ssl: {
  rejectUnauthorized: false
  }
})


module.exports = { pool };