require('dotenv').config();
const { Pool } = require('pg');

const pool = new Pool({
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  database: process.env.DB_NAME,
 ssl: {
    rejectUnauthorized: false // solo si estás usando servicios como Railway
  }
});
pool.query('SELECT * FROM usuarios LIMIT 2', (err, res) => {
  if (err) {
    console.error('❌ Error al consultar usuarios:', err);
  } else {
    console.log('✅ Usuarios encontrados:', res.rows);
  }
});
module.exports = pool;