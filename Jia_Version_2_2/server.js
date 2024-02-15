//new
const express = require('express');
const app = express();
const path = require('path');

// Definiere den statischen Dateipfad für öffentliche Ressourcen (zum Beispiel index.html)
app.use(express.static(path.join(__dirname, 'public')));

// Deine Route, um "index.html" zu senden
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

//Serversart
/* 
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server läuft auf http://localhost:${PORT}`);
});
*/


//old
/*
const express = require('express');*/
const sqlite3 = require('sqlite3');
// const path = require('path');
const bodyParser = require('body-parser');
const { default: test } = require('node:test');

// const app = express();
const port = 3000;

// Connect to the SQLite database
const db = new sqlite3.Database('server.db');

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// Serve static files (like HTML, CSS, JS)
app.use(express.static(path.join(__dirname, 'public')));
app.get('/',(req, res) => res.send("Variable"))
// Login endpoint
app.post('/login', (req, res) => {
    const { mnsp, passcode } = req.body;
    console.log(req.body)
    // Validate the login credentials against the database
    db.get('SELECT * FROM Users WHERE MNSP = ? AND Passcode = ?', [mnsp, passcode], (err, row) => {
        if (err) {
            console.error(err);
            res.status(500).json({ success: false, message: 'Internal Server Error' });
        } else {
            if (row) {
                console.log("gefunden")
                res.json({ success: true, message: 'Login successful' });
            } else {
                console.log("notfound gefunden")
                res.json({ success: false, message: 'Invalid login credentials' });
            }
        }
    });
});

//new
app.use(express.static(path.join(__dirname, 'public')));

// Deine Route, um "index.html" zu senden
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});


// Start the server
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
