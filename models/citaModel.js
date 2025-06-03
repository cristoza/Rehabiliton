
const pool = require('../config/db');

// Función para obtener la disponibilidad de los terapeutas
const getDisponibilidadTerapista = async () => {
  try {
    const result = await pool.query('SELECT * FROM dispo_ter');
    return result.rows;
  } catch (err) {
    console.error('Error al obtener disponibilidad de los terapeutas:', err);
    return [];
  }
};

// citaController.js
const model = require('../models/citaModel');

const reservarCita = async (req, res) => {
  const { id_terapista, id_paciente, fecha_sesion, hora_inicio, hora_fin, requiere_maquina } = req.body;

  try {
    const cita = await model.reservarCita(id_terapista, id_paciente, fecha_sesion, hora_inicio, hora_fin, requiere_maquina);
    if (cita) res.status(201).json({ mensaje: 'Cita reservada con éxito', cita });
    else res.status(500).json({ error: 'No se pudo registrar la cita' });
  } catch (error) {
    res.status(500).json({ error: 'Error en el servidor' });
  }
};

module.exports = { reservarCita };



module.exports = { getDisponibilidadTerapista};
