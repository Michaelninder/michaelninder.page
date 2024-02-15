// Change the SQL query to check MNSP and Password
app.post('/login', (req, res) => {
  const { MNSP, Password } = req.body;

  // Check login credentials in the Users table
  db.get(
    'SELECT * FROM Users WHERE MNSP = ? AND Password = ?',
    [MNSP, Password],
    (err, row) => {
      if (err) {
        console.error(err);
        res.status(500).send('Internal Server Error');
      } else if (row) {
        // Set a cookie to indicate that the user is logged in
        res.cookie('loggedIn', true);
        res.send('Login successful!');
      } else {
        res.status(401).send('Invalid credentials');
      }
    }
  );
});
