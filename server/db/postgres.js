const { Client } = require('pg');

const postgres = new Client({
    user: 'postgres',
    host: 'localhost',
    database: 'spring-book',
    password: '1912',
    port: '5432',
});

postgres.connect()
    .then(() => {
        console.log('Postgres connected');
    })
    .catch(err => {
        console.error('Postgres connection error:', err);
    });

module.exports = { postgres };