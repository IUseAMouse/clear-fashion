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

app.get('/products(.\w+)(.\w+)(.\w+)(.\w+)(.\w+)(.\w+)(.\w+)(.\w+)', async (request, response) => {
  params = await request.params;
  console.log(params)
  response.send({'ack': true, 'params' : params});
});

app.listen(PORT);

console.log(`📡 Running on port ${PORT}`);
