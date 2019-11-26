const http=require('request');
const httpCtrl=require('../util/http.controller');
const jwt = require('jsonwebtoken');
const usuarioCtrl={};
/*
usuarioCtrl.getUsuario=async (req,res)=>{
const usuario=await http.get(`http://localhost:4000/usuario/${req.params.id}`) 
  .catch( (err) =>{
      res.json(err);
    });
    res.json(JSON.parse(usuario));
};*/
usuarioCtrl.signin=async (req,res)=>{
  var user =req.body;
    
     http(httpCtrl.options('http://localhost:4000/usuario/signin',"POST",user),
      (err, httpResponse, body)=> {
         if (body.status){
           const token = jwt.sign({ id: body.id }, 'secretkey');
           res.json({token});
          }else{ 
            res.status(httpResponse.statusCode).json(body);  
          }         
   });  
};
usuarioCtrl.signup=async (req,res)=>{
  var user =req.body;  
     http(httpCtrl.options('http://localhost:4000/usuario/signup',"POST",user),
     (err, httpResponse, body)=> {
      if (body.status){
        const token = jwt.sign({ id: body.id }, 'secretkey'); 
        res.json({token});
       }else{ 
         res.status(httpResponse.statusCode).json(body);  
       } 
      
   });  
}; 
module.exports=usuarioCtrl;