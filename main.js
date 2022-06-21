// npm i pg
// npm i express
// npm init -y
// talves  npm i cors dotenv express express-promise-router pg


//index.js
const db = require("./db");
const slb = require("./teste.js");

//const insD = require("./insData.js");

const express = require('express');
const cors = require('cors');
const app = express();
const path = require('path');
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.json({ type: 'application/vnd.api+json' }));
app.use(cors());

const port = process.env.PORT || 3000;

//slb.selectData()

//const urlShortener = require('node-url-shortener');

const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.urlencoded());

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname + '/index.html'));
});
//http://localhost:3000/url?id=James
app.get('/url', function(req, res) {
  possue = false;  
  if (Object.keys(req.query).length === 0)
     possue = true;
  const Id = req.query.id;    
  console.log(Id);
  console.log(possue);
  //const url = req.body.url
  //res.end("<html><head><title>Teste</title></head><body><h1>Ok ...</h1></body></html>");
 
  (async () => {
    console.log('Começou!');
    
    if (possue){
        const clientes = await slb.selectData(res);
    }else {
        const clientes = await slb.selectData2(res, Id);
    }
    //console.log(clientes);   
    //return clientes; 
    })();
  console.log("passou");    
 // res.end(slb.selectData());
 // urlShortener.short(url, function(err, shortUrl){
 //   res.send(shortUrl);
 // });
});


app.get('/api', (req, res) => {
    res.status(200).send({
      success: 'true',
      message: 'Seja bem-vindo(a) a API Node.js + PostgreSQL + Heroku',
      version: '1.0.0',
    });
  });

app.post('/api', (req, res) => {
    console.log('Got body:', req.body);
    key = req.body.tentativa;
    value = req.body.valor
    res.status(200).send({
      success: 'true',
      message: 'Teste do post heruko' + key + ' - '+ value,
      version: '1.0.0',
    });
  });

app.delete('/api', (req, res) => {
    console.log('Got body:', req.body);
    key = req.body.key;
    value = req.body.password;
    res.status(200).send({
      success: 'true',
      message: 'Teste do DELETE heruko - ' + key + ' - '+ value,
      version: '1.0.0',
    });
  });  


app.listen(port, () => console.log(`url-shortener listening on port ${port}!`));

//curl -d "key=scott&password=secret" -X POST http://localhost:3000/api
//curl -d "key=scott&password=secret" -X PUT http://localhost:3000/api
//curl -d "key=scott&password=secret2" -X DELETE http://localhost:3000/api