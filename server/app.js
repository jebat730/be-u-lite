const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const db = require('./database');


const app = express();



app.use(cors());
app.use(bodyParser.json());

// Example: Fetch data from MySQL
app.get('/api/users', (req, res) => {
  db.query('SELECT * FROM users', (err, results) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.json(results);
    }
  });
});

app.post('/login', (req, res) => {
    const { email, password } = req.body;
  
    if (!email || !password) {
      return res.status(400).send({ message: 'Email and password are required' });
    }
  
    db.query('SELECT * FROM users WHERE email = ?', [email], async (err, results) => {
      if (err) return res.status(500).send({ message: 'Server error' });
      if (results.length === 0) return res.status(401).send({ message: 'Invalid email or password' });
  
      const user = results[0];
      const isPasswordValid = await bcrypt.compare(password, user.password);
      if (!isPasswordValid) return res.status(401).send({ message: 'Invalid email or password' });
  
      res.send({ message: 'Login successful', user });
    });
  });
  

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
