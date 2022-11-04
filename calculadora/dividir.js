let dividir= function (a,b){
 if (a === 0){
  return "no se puede dividir por cero"
 }else if(b ===0){
  return "no se puede dividir por cero"
 }

  if(isNaN(a)){
  return "Error crack ,lo que ingresaste no es un numero"
 }else if(isNaN(b)){
  return "Error crack ,lo que ingresaste no es un numero"
 }

 return "el resultado de la division es " +(a / b)
  
  
  
 


  }




module.exports = dividir ;