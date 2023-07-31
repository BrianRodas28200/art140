'Ruta: /api/estudiante';

const { Router } = require('express');

const {getEstudiantes, crearEstudiante } = require('../controllers/estudiante.controller');


const router = Router();

router.get('/', getEstudiantes);
router.post('/', crearEstudiante);


module.exports = router;