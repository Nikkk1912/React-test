const express = require('express');


const routes = require('./UserRoutes');
const routesPostgres = require('./BookRoutes');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());
app.use('/api', routes);
app.use('/api', routesPostgres);

// Server
const port = 3001;
app.listen(port, () => {
    console.log('Server started on port 3001');
});
