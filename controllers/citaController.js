const pool = require('../config/db');
 // Importa la conexión a PostgreSQL

const verDisponibilidad = async (req, res) => {
  try {
    // Ejemplo: consulta para obtener la disponibilidad de terapeutas (ajusta según tu esquema)
    const resultado = await pool.query('SELECT * FROM disponibilidad_terapeutas');
    res.json(resultado.rows); // Envía los datos en formato JSON
  } catch (error) {
    console.error('Error al obtener disponibilidad:', error);
    res.status(500).send('Error al obtener la disponibilidad');
  }
};

const reservarCita = async (req, res) => {
  const { terapeuta_id, fecha, hora, cliente } = req.body;

  try {
    // Inserta una nueva cita en la tabla citas (ajusta nombres y columnas a tu DB)
    await pool.query(
      'INSERT INTO citas (terapeuta_id, fecha, hora, cliente) VALUES ($1, $2, $3, $4)',
      [terapeuta_id, fecha, hora, cliente]
    );
    res.status(201).send('Cita reservada exitosamente');
  } catch (error) {
    console.error('Error al reservar cita:', error);
    res.status(500).send('Error al reservar la cita');
  }
};

module.exports = { verDisponibilidad, reservarCita };
