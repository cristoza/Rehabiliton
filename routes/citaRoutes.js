// routes/citaRoutes.js
const express = require('express');
const router = express.Router();
const citaController = require('../controllers/citaController');

// Mostrar formulario de reserva
router.get('/reservar', citaController.mostrarFormularioReserva);

// Procesar reserva de cita
router.post('/reservar', citaController.procesarReserva);

module.exports = router;
