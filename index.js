const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

app.use(cors());

const categories = require('./data/categories.json');

app.get('/', (req, res) => {
  res.send('server Running update');
});

app.get('/categories', (req, res) => {
  res.send(categories);
});

app.listen(port, () => {
  console.log('Server running on port', port);
});
