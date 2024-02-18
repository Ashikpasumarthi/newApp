// import express from 'express';
// import mysql from 'mysql';
// import cors from 'cors';
// const app = express();


// const db = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     password: 'Ashik2006@RA543',
//     database: 'new_learning'
// })

// app.use(express.json());
// app.use(cors());

// app.get('/new_languages', (req, res) => {
//     const q = "SELECT languages FROM new_languages";
//     db.query(q, (err, result) => {
//         if (err) return res.json(err);

//         return res.json(result);
//     });
// });



// app.listen(3001, () => {
//     console.log('Listening on port 3000 and connected to 3001');
// });


import express from 'express';
import mysql from 'mysql2/promise';
import cors from 'cors';
// const express = require('express');
// const mysql = require('mysql2/promise');
const app = express();


const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'Ashik2006@RA543',
    database: 'new_app'
})

app.use(express.json());
app.use(cors());

app.get('/book', async (req, res) => {
    try {
        const [rows] = await db.query('SELECT * FROM book');
        res.json(rows);
    } catch (error) {
        console.error('Error fetching data from MySQL:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});



app.listen(3001, () => {
    console.log('Listening on port 3000 and connected to 3001');
});