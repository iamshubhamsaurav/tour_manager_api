const mongoose = require('mongoose');
const colors = require('colors');

const connectDB = async () => {
  const connect = await mongoose.connect(process.env.MONGO_URI, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  });
  console.log(
    `MongoDB Connected: ${connect.connection.host}`.cyan.underline.bold
  );
};

module.exports = connectDB;
