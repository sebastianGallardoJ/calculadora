const calculadora = require ('./calculadora')


const process = require('process');
const operacion = process.argv[2];
const numeroA = +process.argv[3]
const numeroB = +process.argv[4];

let resultado = 0;

if(operacion === "sumar"){
    resultado = calculadora.sumar(numeroA, numeroB)
 
    
    
}else if(operacion === "restar"){
    resultado = calculadora.restar(numeroA, numeroB)
}else if(operacion === "multiplicar"){
    resultado = calculadora.multiplicar(numeroA, numeroB)
}

else if(operacion === "dividir"){
    resultado = calculadora.dividir(numeroA, numeroB)
    /* if (numeroA === 0 || numeroB === 0){
        console.log(resultado = "No se puede dividir un numero por cero genius")
    } 
  } */

  }
else {
    resultado = "ERROR: vuelva a intentarlo asegurandose de usar numeros"

} 


console.log(resultado)



/* respuestas:

A) ¿que hubiese sucedido si, en vez de generar un archivo por cada operacion ,
    hubiesemos programado todo en un mismo archivo?

    hubiera funcionado todo normal pero seria una mala practica ya que seria un archivo gigante 
    con codigo muy desprolijo 



B) ¿por que el mejor camino es ir generando distintos archivos y luego adquirirlos en uno solo?
 
siento que esto tiene que ver con la anterior respuesta .Es mucho mas prolijo y mas eficiente a la hora de
realizar cambios como por ejemplo la parte de agregar el que pasaria si divido un numero por cero 

C) ¿sera esta metodologia de trabajo una constante de aqui en adelante?
yo creo que si porque es lo que mas se habla en la clase crear modulos para hacer mas eficiente el funcionamiento
de nuestra aplicacion y mas legible para otra persona si asi requiera que otra persona intervenga
en mi trabajo

*/