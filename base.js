const http = require('http');
/*
Host
ec2-3-234-131-8.compute-1.amazonaws.com
Database
d7i5d877obafpq
User
tckffnnvzulblb
Port
5432
Password
3818ceea34b6f95eb8b15968771643ffab34df2db16a3208763a8a6272f97288
URI
postgres://tckffnnvzulblb:3818ceea34b6f95eb8b15968771643ffab34df2db16a3208763a8a6272f97288@ec2-3-234-131-8.compute-1.amazonaws.com:5432/d7i5d877obafpq
Heroku CLI
heroku pg:psql postgresql-solid-42349 --app ds302

*/ 
const { Client } = require('pg')
const client = new Client({
  user: 'tckffnnvzulblb',
  host: 'ec2-3-234-131-8.compute-1.amazonaws.com',
  database: 'd7i5d877obafpq',
  password: '3818ceea34b6f95eb8b15968771643ffab34df2db16a3208763a8a6272f97288',
  port: 5432,
})
client.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});


base = http.createServer((req,res)=>{
    res.writeHead(200,{'Content-type': 'text/html; charset=utf-8'});
    res.end('<html><head></head><body><h1>Alo turma<br>tudo bem<br></h1></body></html>');
});
base.listen(process.env.PORT || 8080 )
console.log('Control C para parar...')