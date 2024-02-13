// let suma = 0;

// for (let i = 1; i <= 10; i++) {
//   console.log(`vuelta: ${i}`)
//   console.log(`Suma vale: ${suma}`)
//   console.log(`Numero a sumar: ${i} `)
//   console.log(`Suma vale ahora: ${suma += i} `)
//   console.log(`===`)
// }

//EJERCICIO 1 / CREA UN BUCLE QUE INDIQUE EN QUE NUMERO DE ITERACIÓN ESTAMOS DE 1 AL 50

// for(let i = 1; i <=50; i++){
//     console.log(`Estamos en la iteracion: ${i}`)
// }

//EJERCICIO 2 / CREA UN BUCLE COMO EL ANTERIOR PERO A LA INVERSA

// for(let i = 50; i >= 1; i--){
//     console.log(`Estamos en la iteracion: ${i}`)
// }

//EJERCICIO 3 / BUCLE WHILE

//  let i = 1;

//  while( i < 20) {
//      console.log(i)
//      i++
// }
//     console.log(i)


//Solucion ejercicio 3 (otro modo de hacerlo)    

// contador = 1;

// while( contador < 20){
//     console.log(contador)
//     contador++
// }
//     console.log(contador)

//EJERCICIO 4 / ARRAYS

//  const BocaJuniors = ["Chiquito Romero", "Lema", "Figal", "Advincula", "Equi", "Zenon", "Cavani", "Merentiel", "Benedetto", "Langoni"];

//  for(let i = 0; i < BocaJuniors.length; i++) {
//      console.log(BocaJuniors[i])
//  }

//EJERCICIO 5 / IMPRIMIR LOS PRIMEROS 5 NUMEROS DEL ARRAY

// const BocaJuniors = ["Chiquito Romero", "Lema", "Figal", "Advincula", "Equi", "Zenon", "Cavani", "Merentiel", "Benedetto", "Langoni"];

// for(let i = 0; i < BocaJuniors.length; i++) {
//     if(i === 5) break;
//     console.log(BocaJuniors[i])

// }

//EJERCICIO 6 / IMPRIMIR TODOS LOS NUMEROS EXCEPTO EL 7 DEL ARRAY

// const BocaJuniors = ["Chiquito Romero", "Lema", "Figal", "Advincula", "Equi", "Zenon", "Cavani", "Merentiel", "Benedetto", "Langoni"];

// for(let i = 0; i < BocaJuniors.length; i++) {
//     if(i === 7) continue;
//     console.log(BocaJuniors[i])

// }

//EJERCICIO 7 / IMRPRIMIR TODOS LOS NUMEROS PARES DEL ARRAY

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

// for(let i = 0; i < numbers.length; i++) {
//     if(numbers[i] % 2 === 0) {
//         console.log(numbers[i]);
//     }
// }

//EJERCICIO 8 / IMPRIMIR TODOS LOS NUMEROS IMPARES DEL ARRAY

//  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

//  for(let i = 0; i < numbers.length; i++) {
//     if(numbers[i] % 2 === 1) {
//         console.log(numbers[i]);
//     }
// }

// Solucion ejercicio 8

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

// for(let i = 0; i < numbers.length; i++) {
//    if(numbers[i] % 2 !== 0) {
//        console.log(numbers[i]);
//    }
// }

// EJERCICIO 10 TABLA DE MULTIPLICAR

// const numeros = [ 1, 2, 3, 4, 5, 6 ,7 ,8 ,9 , 10];

// for(let i = 1; i < numeros.length; i++) {
//     for(let e = 0; e < 10; e++) {
//         console.log(`${numeros[e]} multiplicado por ${i} es igual a ${numeros[e] * i}`)
//         console.log("====")
//     }
// }


//EJERCICIOS DE LA WEB 1 

// let precio = 200;
// let iva = 21;

// let precioTotal = precio + precio*21/100;
// console.log("El precio total es: " +precioTotal);

//EJERCICIOS DE LA WEB 2

// let lado = 40
// let area = 40*40 
// let perimetro = 40*4

// console.log("El tamaño del area es " + area)
// console.log("El tamaño del perimtro es: " + perimetro)

//EJERCICIOS DE LA WEB 3

// let nombre = prompt("Escribe tu nombre")
// console.log("Hola " + nombre);

//Solucion de la web 3

// let nombre = prompt("Escribe tu nombre")
// let saludo = "hola " + nombre;
// console.log(saludo)

// let persona = {
//     nombre: "Nicolás",
//     Edad: 29,
//     dirección: {
//         calle: "Manuel Mujica Lainez 3647",
//         ciudad: "Córdoba"
//     }
// };

// console.log(persona)

let datos = [
    {nombre: "Juan", edad: 29, ciudad: "Buenos Aires"},
    {nombre: "Ana", edad: 30, ciudad: "Mendoza"},
    {nombre: "Pedro", edad: 20, ciudad: "Jujuy"},
    {nombre: "Nicolás", edad: 29, ciudad: "Amelia" }
];

console.table(datos)
 

