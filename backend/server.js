const express = require('express');
const colors = require('colors');
const morgan = require('morgan');

const path = require('path');
const connectDB = require('./config/db');
const noteRoutes = require('./routes/noteRoutes');
const Note = require('./models/noteModel');

connectDB();

const app = express();

app.use(express.json());
app.use(express.static(path.join(__dirname, '../public')));
app.use(morgan('tiny'));

app.get('/', (req, res) => {
  res.json({ message: 'Server is running...' });
});

app.use(noteRoutes);

app.listen(5000, console.log('Server is running on port 5000'.bold.green));
