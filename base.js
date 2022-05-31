const http = require('http');

http.createServer((req,res)=>{
    res.writeHead(200,{'Content-type': 'text/html; charset=utf-8'});
    res.end('<html><head></head><body><h1>Alo turma<br>tudo bem<br></h1></body></html>');
}).listen(3001);

console.log('Control C para parar...')