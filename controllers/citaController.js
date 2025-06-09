// controllers/citaController.js
const { reservarCita, getDisponibilidadTerapista } = require('../models/citaModel');

const mostrarFormularioReserva = async (req, res) => {
  try {
    const disponibilidad = await getDisponibilidadTerapista();
    res.render('reservar', {
      disponibilidad,
      query: req.query // 👈 esta línea es clave
    });
  } catch (error) {
    console.error('Error al mostrar formulario:', error);
    res.status(500).send('Error al cargar la vista');
  }
};


const procesarReserva = async (req, res) => {
  const { id_terapista, id_paciente, fecha_sesion, hora_inicio, hora_fin, requiere_maquina } = req.body;

  try {
    const cita = await reservarCita(
      parseInt(id_terapista),
      parseInt(id_paciente),
      fecha_sesion,
      hora_inicio,
      hora_fin,
      requiere_maquina === 'true'
    );

    if (cita) {
      res.redirect('/citas/reservar?exito=1');
    } else {
      res.redirect('/citas/reservar?error=1');
    }
  } catch (error) {
    console.error('Error al procesar reserva:', error);
    res.status(500).send('Error al procesar la reserva');
  }
};

module.exports = { mostrarFormularioReserva, procesarReserva };
