// admin/controllers/pacienteController.js
const pool = require('../../config/db');

const listarPacientes = async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM pacientes ORDER BY id_paciente');
    res.render('admin/pacientes', { pacientes: result.rows });
  } catch (error) {
    console.error('Error al listar pacientes:', error);
    res.status(500).send('Error al listar pacientes');
  }
};

const crearPaciente = async (req, res) => {
  const { nombre, apellido, cedula, telefono, email } = req.body;

  try {
    await pool.query(
      `INSERT INTO pacientes (nombre, apellido, cedula, telefono, email)
       VALUES ($1, $2, $3, $4, $5)`,
      [nombre, apellido, cedula, telefono, email]
    );
    res.redirect('/admin/pacientes');
  } catch (error) {
    console.error('Error al crear paciente:', error);
    res.status(500).send('Error al crear paciente');
  }
};

module.exports = {
  listarPacientes,
  crearPaciente
};
