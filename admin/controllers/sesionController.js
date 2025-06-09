// admin/controllers/sesionController.js
const pool = require('../../config/db');

const listarSesiones = async (req, res) => {
  try {
    const result = await pool.query(`
      SELECT s.*, t.nombre AS nombre_terapista, t.apellido AS apellido_terapista,
             p.nombre AS nombre_paciente, p.apellido AS apellido_paciente
      FROM sesiones s
      JOIN terapistas t ON s.id_terapista = t.id_terapista
      JOIN pacientes p ON s.id_paciente = p.id_paciente
      ORDER BY s.id_sesion DESC
    `);
    res.render('admin/sesiones', { sesiones: result.rows });
  } catch (error) {
    console.error('Error al listar sesiones:', error);
    res.status(500).send('Error al listar sesiones');
  }
};

const crearSesion = async (req, res) => {
  const { id_terapista, id_paciente, fecha_sesion, hora_inicio, hora_fin, requiere_maquina, estado_sesion } = req.body;

  try {
    await pool.query(
      `INSERT INTO sesiones (id_terapista, id_paciente, fecha_sesion, hora_inicio, hora_fin, requiere_maquina, estado_sesion)
       VALUES ($1, $2, $3, $4, $5, $6, $7)`,
      [id_terapista, id_paciente, fecha_sesion, hora_inicio, hora_fin, requiere_maquina === 'true', estado_sesion || 'Agendada']
    );
    res.redirect('/admin/sesiones');
  } catch (error) {
    console.error('Error al crear sesión:', error);
    res.status(500).send('Error al crear sesión');
  }
};

module.exports = { listarSesiones, crearSesion };
