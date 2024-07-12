const express = require('express');
const serverless = require('serverless-http');
const app = express();

app.use(express.json());

app.post('/submit', (req, res) => {
  const resultsList = req.body.resultsList;
  res.status(200).send('Data submitted successfully');
});

module.exports.handler = serverless(app);
