const express = require('express');
const morgan = require('morgan');
const colors = require('colors');
const dotenv = require('dotenv');

const app = express();

if (process.env.NODE_ENV === 'development') {
  app.use(morgan());
}

app.get('/', (req, res, next) => {
  res.status(200).json({ success: true, data: 'All working!' });
});

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log('Listening to Server on : ', PORT);
});
