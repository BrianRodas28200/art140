'Ruta: /api/estudiante';

const { Router } = require('express');

const {getEstudiantes, crearEstudiante, getEstudiante } = require('../controllers/estudiante.controller');


const router = Router();

router.get('/', getEstudiantes);
router.post('/', crearEstudiante);
router.get('/buscar', getEstudiante);


module.exports = router;