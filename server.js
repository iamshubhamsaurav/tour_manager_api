const express = require('express');
const morgan = require('morgan');
const colors = require('colors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');

const app = express();

dotenv.config({ path: './config/config.env' });
connectDB();

const tourRoute = require('./routes/tours');

if (process.env.NODE_ENV === 'development') {
  app.use(morgan());
}

app.use('/api/v1/tours', tourRoute);

app.all('*', (req, res, next) => {
  res.status(200).json({ success: false, message: 'Route Not Found' });
});

const PORT = process.env.PORT || 5000;

const server = app.listen(PORT, () => {
  console.log(`Listening to server on port: ${PORT}`.cyan.bold.underline);
});

process.on('unhandledRejection', (err) => {
  console.log('UNHANDLED REJECTION! SHUTTING DOWN...'.red.bold);
  console.log(err.name, err.message);
  server.close(() => {
    process.exit(1);
  });
});
