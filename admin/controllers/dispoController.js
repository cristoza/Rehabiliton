// admin/controllers/dispoController.js
const pool = require('../../config/db');

const listarDisponibilidad = async (req, res) => {
  try {
    // Consulta con JOIN para mostrar info del terapeuta junto a su disponibilidad
    const result = await pool.query(`
      SELECT d.*, t.nombre, t.apellido
      FROM dispo_ter d
      JOIN terapistas t ON d.id_terapista = t.id_terapista
      ORDER BY d.id_disponibilidad
    `);
    res.render('admin/dispo_ter', { disponibilidad: result.rows });
  } catch (error) {
    console.error('Error al listar disponibilidad:', error);
    res.status(500).send('Error al listar disponibilidad');
  }
};

const crearDisponibilidad = async (req, res) => {
  const { id_terapista, dia_semana, hora_inicio, hora_fin } = req.body;

  try {
    await pool.query(
      `INSERT INTO dispo_ter (id_terapista, dia_semana, hora_inicio, hora_fin)
       VALUES ($1, $2, $3, $4)`,
      [id_terapista, dia_semana, hora_inicio, hora_fin]
    );
    res.redirect('/admin/dispo_ter');
  } catch (error) {
    console.error('Error al crear disponibilidad:', error);
    res.status(500).send('Error al crear disponibilidad');
  }
};

module.exports = { listarDisponibilidad, crearDisponibilidad };
