const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(
      'mongodb://localhost:27017/notes-app-db',
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
      }
    );
    console.log(`MongoDB connected: ${conn.connection.host}`.bold.green);
  } catch (error) {
    console.log(`ERROR: ${error.message}`.bold.red.inverse);
  }
};

module.exports = connectDB;
