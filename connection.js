const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'test'
});

connection.connect((err) => {
    if (err) {
        console.error('Error connecting to MySQL database: ', err);
        return;
    }
    console.log('Connected to MySQL database.');
});



// execute a SELECT query to retrieve all data from a table
connection.query('SELECT * FROM user', (err, rows) => {
    if (err) {
        console.error('Error executing query: ', err);
        return;
    }
    console.log('Result: ', rows);

    // close the connection when you're done using it
    connection.end((err) => {
        if (err) {
            console.error('Error closing MySQL database connection: ', err);
            return;
        }
        console.log('Closed MySQL database connection.');
    });
});
