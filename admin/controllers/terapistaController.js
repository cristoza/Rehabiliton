const pool = require('../../config/db'); // Importa la conexión a PostgreSQL

// Función para listar todos los terapeutas
const listarTerapistas = async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM terapistas ORDER BY id_terapista');
    res.render('admin/terapistas', { terapistas: result.rows });
  } catch (error) {
    console.error('Error al listar terapeutas:', error);
    res.status(500).send('Error al listar terapeutas');
  }
};

// Función para crear un nuevo terapeuta desde el formulario
const crearTerapista = async (req, res) => {
  const { nombre, apellido, cedula, telefono, email, especialidad, fecha_contratacion } = req.body;

  try {
    await pool.query(
      `INSERT INTO terapistas (nombre, apellido, cedula, telefono, email, especialidad, fecha_contratacion)
       VALUES ($1, $2, $3, $4, $5, $6, $7)`,
      [nombre, apellido, cedula, telefono, email, especialidad, fecha_contratacion]
    );
    res.redirect('/admin/terapistas');
  } catch (error) {
    console.error('Error al crear terapeuta:', error);
    res.status(500).send('Error al crear terapeuta');
  }
};

// Exporta las funciones como un objeto
module.exports = {
  listarTerapistas,
  crearTerapista
};
