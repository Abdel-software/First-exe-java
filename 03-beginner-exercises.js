/*
Clase 18 - Ejercicios: primeros pasos
Vídeo: https://youtu.be/1glVfFxj8a4?t=4733
*/

// 1. Escribe un comentario en una línea

//este es un comentario de texto

// 2. Escribe un comentario en varias líneas

/* este es un cometario
en varias
lineas */

// 3. Declara variables con valores asociados a todos los datos de tipo primitivos

let myname = "abdel"

let age = 31
let height = 1.82
let isStudent = true

let undefinedValor = undefined

let valorNull = null

let bigNum = 36837648723648723648726384762387648237n

let mySymbol = Symbol("mySymbol")



// 4. Imprime por consola el valor de todas las variables

console.log(myname)
console.log(age)
console.log(height)
console.log(isStudent)
console.log(undefinedValor)
console.log(valorNull)
console.log(bigNum)
console.log(mySymbol)


// 5. Imprime por consola el tipo de todas las variables
console.log(typeof myname)
console.log(age, typeof age)
console.log(typeof height)
console.log(typeof isStudent)
console.log(typeof undefinedValor)
console.log(typeof valorNull)
console.log(typeof bigNum)
console.log(typeof mySymbol)


// 6. A continuación, modifica los valores de las variables por otros del mismo tipo

myname = "nora"
age = 35
height = 1.20
isStudent = false
undefinedValor = undefined
valorNull = null
bigNum = 23423423584874788287328938298383n
mySymbol = Symbol("otro")
// 7. A continuación, modifica los valores de las variables por otros de distinto tipo

myname = 24
age = "hola"
height = "adios"

// 8. Declara constantes con valores asociados a todos los tipos de datos primitivos
 const nombreFijo = "cuscus"

 const numeroFijo = 45


// 9. A continuación, modifica los valores de las constantes
// estas lineas de abajo se quedan comentadas por que dan error, es resolucion al ejercicios 10 
//nombreFijo = "gato" 
//numeroFijo = 67

console.log(nombreFijo)
console.log(numeroFijo)

// 10. Comenta las líneas que produzcan algún tipo de error al ejecutarse