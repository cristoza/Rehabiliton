const express = require('express');
const router = express.Router();
const citaController = require('../controllers/citaController');

// Ruta para ver la disponibilidad de los terapeutas
router.get('/disponibilidad', citaController.verDisponibilidad);  // Asegúrate de que esto esté correcto

// Ruta para reservar una cita
router.post('/reservar', citaController.reservarCita);  // Asegúrate de que esto esté correcto

module.exports = router;
