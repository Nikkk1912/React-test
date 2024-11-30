const express = require('express');
const path = require('path');


const routes = require('./UserRoutes');
const routesPostgres = require('./BookRoutes');
const routesImage = require('./ImgRoute');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());
app.use('/api', routes);
app.use('/api', routesPostgres);
app.use('/api', routesImage)

app.use('/static', express.static(path.join(__dirname, 'static')));

// Server
const port = 3001;
app.listen(port, () => {
    console.log('Server started on port 3001');
});
