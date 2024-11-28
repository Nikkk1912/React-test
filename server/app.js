const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());
app.use('/api', routes);

// MongoDB
mongoose.connect('mongodb://mykola:1234@localhost:27017/mongoHw3?authSource=admin')
.then(() => console.log('Connected to mongodb!'))
.catch(err => console.error("Bad staff happened to mongo ", err));

// Server
const port = 3001;
app.listen(port, () => {
    console.log('Server started on port 3001');
});
