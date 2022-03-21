const cors = require('cors');
const express = require('express');
const helmet = require('helmet');
const db = require('../db');

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

app.get('/products', async (request, response) => {
  result = await db.find({});
  response.send(result);
})

app.get('/products/search', async (request, response) => {
  
  var queryParams = {}

  const brand = request.query.brand;
  const price = parseInt(request.query.price);
  const limit = parseInt(request.query.limit);

  console.log(brand,price,limit);

  if (brand != undefined) queryParams['brand'] = brand;

  if (price != undefined) queryParams['price'] = {$lt : price};

  result = await db.find(queryParams);

  if (limit != undefined){ // the .limit function doesn't work for some reason ???
    let count = 0;
    res = []
    for (var key in result){
      if (count >= limit) {
        response.send({
          "brand" : brand,
          "price" : price,
          "limit" : limit,
          "result" : res
        })
        return;
      };
      
      res.push(result[key]);
      count++;
      console.log(count);
      
    }
  }

  response.send({
    "brand" : brand,
    "price" : price,
    "limit" : limit,
    "result" : result
  })

});

app.get('/products/:_id', async (request, response) => {
  result = await db.find({"_id" : request.params._id});
  response.send({
    "_id" : request.params._id, 
    "result" : result});
});


app.listen(PORT);

console.log(`📡 Running on port ${PORT}`);
