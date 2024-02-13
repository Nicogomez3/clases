//EJERCICIO 1

//let edad = 29;
//let nombre = "Nicolás"

//console.log(edad)
//console.log(nombre)
 
//EJERCICIO 2 Y 3 (REASIGNAR VALORES DE VARIABLES EDAD Y NOMBRE)

//let edad = 30;
//let nombre = "Andrés"

//console.log(`Mi nombre es ${nombre} y tengo ${edad} años`);

//EJERCICIO 4 

//let num1 = 5;
//let num2 = 2;

//console.log(num1 + num2);

//EJERCICIO 5 

//let numero = 15

//numero = 25 

//console.log(numero);

//EJERCICIO 6

//let numero = 10 

//alert(numero);

//EJERCICIO 7

//let valor = prompt("Ingrese un valor")

//console.log(valor)

//EJERCICIO 8

//let valor = prompt("Ingrese un valor")

//alert(`El valor ingresado es ${valor}`)

//EJERCICIO 9 

//let valor1 = prompt("Ingrese su nombre")
//let valor2 = prompt("Ingrese su segundo nombre")

//alert(`El primer valor ingresado es ${valor1} y el segundo es ${valor2}`);

//EJERCICIO 10 

//var nombre = "carlos"

//console.log(nombre)

//EJERCICIO 11, 12 ,13 Y 14 RESPONDIDOS EN EL CUESTIONARIO DE LA CLASE

//EJERCICIO 15

//let edad = 20;

//if (edad >= 18) {
  //  console.log("Soy mayor de edad")
//} else {
  //  console.log("Soy menor de edad")
//}

//EJERCICIO 16

//let valor1 = 22;
//let valor2 = 20;

//if(valor1 > valor2) {
//    console.log(`${valor1} es mayor que ${valor2}`)
//}else if(valor1 < valor2)  {
//console.log(`${valor2} es mayor que ${valor1}`)
//}else {
//    console.log(`${valor1} y ${valor2} son iguales`) 
//}

//EJERCICIO 17

//let valor = prompt("Escriba un string")

//if(valor === "alerta") {
//    alert("soy una Alerta")
//} else if(valor === "consola") {
//    console.log("Soy un mensaje en consola")
//}else {
//    alert("Me muestro en ambos lados"); 
//    console.log("Me muestro en ambos lados")
//} 

//EJERCICIO 18

//let edad = 60;

//if(edad < 20 && edad < 13) {
//    console.log("Soy un niño")
//}else if(edad < 20 && edad >= 13) {
//    console.log("Soy un adolescente") 
//}else if(edad >= 20 && edad < 50) {
//    console.log("Soy un adulto")
//}else if(edad > 50) {
//    console.log("Soy un adulto mayor")
//}

//SOLUCION EJERCICIO 18

//let edad = 60;

//if(edad < 13) {
//    console.log("Soy un niño");
//}else if(edad < 20){
//    console.log("Soy un adolescente");
//}else if(edad >= 20 && edad < 50) {
//    console.log("Soy un adulto");
//}else {
//    console.log("Soy un adulto mayor")
//}

//EJERCICIO 19

// let fruta = "kiwi";

// switch(fruta) {
//     case "Naranja":
//         console.log("Soy una naranja");
//         break;

//     case "Manzana":
//         console.log("Soy una manzana");
//         break;
    
//     case "Banana":
//         console.log("Soy una banana");
//         break;
    
//     case "Durazno":
//         console.log("Soy un durazno");
//         break;
        
//         default: console.log("No se que soy");
//         break;
// }

// let valor = prompt("Ingrese un valor")

// switch(valor) {
//   case "Yerba": 
//         alert("Tomo mate");
//         break;

//  case "Café":
//       alert("Tomo Café");
//       break;       

//  case "Saquito de té":
//       alert("Tomo Té");
//       break;
//       default: alert("No tomes nada");
//       break;     
// }

// let valor = prompt("Ingrese un valor")

// if(valor === "Yerba") {
//   alert("Puedo tomar mate")
// }else if(valor === "No tengo yerba") {
//   alert("Toma café") 
// }else if(valor === "No tengo café") {
//   alert("Bueeeno, toma té")
// } else if(valor === "No tengo té") {
//   alert("Toma agua")
// }else {
//   alert("No tomes nada")
// }

// let valor = prompt("Ingrese su calificación")

// if(valor >= 10) {
//   alert("Tu calificación es excelente")
// }else if(valor >= 8){
//   alert("Tu calificacion es Muy buena")
// }else if(valor >= 6 ) {
//   alert("Tu calificacion es Buena")
// }else if(valor >= 4 ) {
//   alert("Tu calificacion es regular")
// }else if(valor >= 2) {
//   alert("Tu calificacion es Mala")
// }else{
//   alert("Tu calificacion es Muy mala")
// } 

let suma = 0;

for (let i = 1; i <= 10; i++) {
  console.log(`vuelta: ${i}`)
  console.log(`Suma vale: ${suma}`)
  console.log(`Numero a sumar: ${i} `)
  console.log(`Suma vale ahora: ${suma += i} `)
  console.log(`===`)
}