const httpCtrl={};
httpCtrl.options=(url,method,body)=>{
 return  { url,    
    method,
    headers : {
      "content-type": "application/json",
    },
    body,
    json:true}
  };
module.exports=httpCtrl;