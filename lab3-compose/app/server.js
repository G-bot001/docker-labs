const express = require('express');
const { Pool } = require('pg');

const pool = new Pool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

const app = express();

app.get('/', async (req, res) => {
  try {
    await pool.query('INSERT INTO visits DEFAULT VALUES');
    const { rows } = await pool.query('SELECT COUNT(*) AS count FROM visits');
    res.json({ message: 'Hello from Compose!', visits: Number(rows[0].count) });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'database error' });
  }
});

app.get('/health', (req, res) => res.json({ status: 'ok' }));

async function start() {
  await pool.query(
    'CREATE TABLE IF NOT EXISTS visits (id SERIAL PRIMARY KEY, visited_at TIMESTAMPTZ DEFAULT now())'
  );
  app.listen(3000, () => console.log('Server running on port 3000'));
}

start().catch((err) => {
  console.error(err);
  process.exit(1);
});