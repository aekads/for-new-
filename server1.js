const express = require("express");
const session = require("express-session");
const { Pool } = require('pg');  // Use Pool from 'pg' for connection pooling
const cookieParser = require("cookie-parser");

// Database connection configuration
const dbConfig = {
  user: 'u3m7grklvtlo6',
  host: '35.209.89.182',
  database: 'dbzvtfeophlfnr',
  password: 'AekAds@24',
  port: 5432,  // Default PostgreSQL port
};

// Create a new pool instance for PostgreSQL
const pool = new Pool(dbConfig);

const app = express();

// Use cookie parser and session middleware if necessary
app.use(cookieParser());
app.use(session({
  secret: 'dhvanil', // Replace with a secure key
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false } // Set to true if using HTTPS
}));

// Route to get all data from 'screens' table
app.get('/alldata1', async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM screens ORDER BY screenid DESC");
    const allScreens = result.rows;
    res.json(allScreens);
  } catch (err) {
    console.error("Error occurred while fetching all screens:", err);
    res.status(500).send("Error fetching data");
  }
});

// Sync database and start server
app.listen(3000, () => {
  console.log('Server is running on port 3001');
});
