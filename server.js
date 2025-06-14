const express = require('express');
const { greet } = require('./library');

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  const message = greet('زائر');
  res.send(`<h1>${message}</h1>`);
});

app.listen(port, () => {
  console.log(`السيرفر يعمل على http://localhost:${port}`);
});
