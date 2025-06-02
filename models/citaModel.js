const client = require('../config/db');

// Función para obtener la disponibilidad de los terapeutas
const getDisponibilidadTerapista = async () => {
  try {
    const result = await client.query('SELECT * FROM disponibilidadterapistas WHERE estado = TRUE');
    return result.rows; // Devuelve todas las disponibilidades de los terapeutas
  } catch (err) {
    console.error('Error al obtener disponibilidad de los terapeutas:', err);
    return [];
  }
};

// Función para reservar una cita
const reservarCita = async (id_terapista, id_paciente, fecha_sesion, hora_inicio, hora_fin, requiere_maquina) => {
  try {
    const result = await client.query(
      'INSERT INTO sesiones (id_terapista, id_paciente, fecha_sesion, hora_inicio, hora_fin, requiere_maquina, estado_sesion) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *',
      [id_terapista, id_paciente, fecha_sesion, hora_inicio, hora_fin, requiere_maquina, 'pendiente']
    );
    return result.rows[0]; // Devuelve la cita recién reservada
  } catch (err) {
    console.error('Error al reservar la cita:', err);
    return null;
  }
};

module.exports = { getDisponibilidadTerapista, reservarCita };
