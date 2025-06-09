const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',           // Tu usuario de PostgreSQL
  host: 'localhost',          // O '127.0.0.1'
  database: 'rehabilitacion', // El nombre de tu base de datos
  password: '200429',  // Reemplaza con tu contraseña real
  port: 5432                  // Puerto por defecto
});

module.exports = pool;
