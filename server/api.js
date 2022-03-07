const cors = require('cors');
const express = require('express');
const helmet = require('helmet');

const PORT = 8092;

const app = express();

module.exports = app;

app.use(require('body-parser').json());
app.use(cors());
app.use(helmet());

app.options('*', cors());

app.get('/', (request, response) => {
  response.send({'ack': true});
});

app.get('/products/:id', async (request, response) => {
  specs = await request.params.id.split('&');
  data = {}

  specs.forEach(element => {
    key_val = element.split('=');
    data[key_val[0]] = key_val[1];
  });
  try{

  }
  catch(e){

  }
  response.send({'ack': true, 'params' : data});
});

app.get('/products/search', async (request, response) => {
  specs = await request.params.id.split('&');
  data = {}

  specs.forEach(element => {
    key_val = element.split('=');
    data[key_val[0]] = key_val[1];
  });
  try{

  }
  catch(e){
    
  }
  response.send({'ack': true, 'params' : params});
});

app.listen(PORT);

console.log(`📡 Running on port ${PORT}`);
