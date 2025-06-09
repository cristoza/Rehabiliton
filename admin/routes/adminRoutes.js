const express = require('express');
const router = express.Router();
const terapistaController = require('../controllers/terapistaController');
const pacienteController = require('../controllers/pacienteController');
const dispoController = require('../controllers/dispoController');
const sesionController = require('../controllers/sesionController');

router.get('/sesiones', sesionController.listarSesiones);
router.post('/sesiones', sesionController.crearSesion);


router.get('/dispo_ter', dispoController.listarDisponibilidad);
router.post('/dispo_ter', dispoController.crearDisponibilidad);
// Rutas pacientes
router.get('/pacientes', pacienteController.listarPacientes);
router.post('/pacientes', pacienteController.crearPaciente);


// Rutas
router.get('/terapistas', terapistaController.listarTerapistas);
router.post('/terapistas', terapistaController.crearTerapista);

module.exports = router;
