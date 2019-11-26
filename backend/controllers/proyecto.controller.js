const proyectoCtrl={};
proyectoCtrl.getProyectosUsuario=async(req,res)=>{
    const projects=req.body;
    http(httpCtrl.options('http://localhost:3200/ms/projects',"GET",projects),
    (err, httpResponse, body)=> {
          res.status(httpResponse.statusCode).json(body);
        });  
}
proyectoCtrl.crearProyecto=async(req,res)=>{
    const projects=req.body;
    http(httpCtrl.options('http://localhost:3200/ms/projects',"POST",projects),
    (err, httpResponse, body)=> {
          res.status(httpResponse.statusCode).json(body);
        });  
}
proyectoCtrl.editatProyecto=async(req,res)=>{

}
proyectoCtrl.eliminarProyecto=async(req,res)=>{

}
module.exports=proyectoCtrl;