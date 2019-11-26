const routes=require('express').Router();
const tokenCtrl=require('../util/token.controller')
const usuarioCtrl=require('../controllers/usuario.controller');
const proyectoCtrl=require('../controllers/proyecto.controller');
 
routes.post('/usuario/signin',usuarioCtrl.signin);
routes.post('/usuario/signup',usuarioCtrl.signup);
routes.get('/usuario/proyecto',tokenCtrl.verifyToken,proyectoCtrl.getProyectosUsuario);

module.exports=routes;