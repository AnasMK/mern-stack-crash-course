const express = require('express');
const colors = require('colors');
const morgan = require('morgan');
const asyncHandler = require('express-async-handler');
const path = require('path');
const connectDB = require('./config/db');
const Note = require('./models/noteModel');

connectDB();

const app = express();

app.use(express.static(path.join(__dirname, '../public')));
app.set('view engine', 'ejs');
app.use(morgan('tiny'));

app.get('/', (req, res) => {
  res.json({ message: 'Server is running...' });
});

app.get(
  '/notes',
  asyncHandler(async (req, res) => {
    const notes = await Note.find({});
    res.render('notes', { notes: notes });
  })
);

app.listen(5000, console.log('Server is running on port 5000'.bold.green));
