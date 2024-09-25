const express = require("express");
const { Pool } = require('pg');  // Use Pool from 'pg' for connection pooling

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

// Route to get all data from 'screens' table
app.get('/alldata', async (req, res) => {
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
  console.log('Server is running on port 3000');
});
