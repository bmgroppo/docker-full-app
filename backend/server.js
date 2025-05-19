const express = require('express');
const mysql = require('mysql2');

const app = express();
const port = 3000;

const db = mysql.createConnection({
  host: 'mysql',
  user: 'root',
  password: 'rootpass',
  database: 'testdb'
});

app.get('/api', (req, res) => {
  db.query('SELECT NOW() AS time', (err, results) => {
    if (err) return res.status(500).send(err);
    res.json({ time: results[0].time });
  });
});

app.listen(port, () => {
  console.log(`Servidor Node.js rodando na porta ${port}`);
});