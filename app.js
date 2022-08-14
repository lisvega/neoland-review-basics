/*# neoland-review-basics

**Iteración #1: Mix for e includes**

Dado el siguiente javascript usa forof para recorrer el array de películas, 
genera un nuevo array con las categorías de las películas e imprime 
por consola el array de categorías. Ten en cuenta que las categorías no deberían repetirse. 
Para filtrar las categorías puedes ayudarte de la función **.includes()***/


//1.-usar forof para recorrer el array de movies.
//2.- hay que hacer un nuevo array incluyendo las categorias de las peliculas.
//3.1- evitar duplicados de categorias.
//3.2- crear una funcion que use el **.includes()**
//4.- imprir array *categories* por consola.

const categorias = []

const movies = [
    { title: 'Madaraspar', duration: 192, categories: ['comedia', 'aventura'] },
    { title: 'Spiderpan', duration: 122, categories: ['aventura', 'acción'] },
    { title: 'Solo en Whatsapp', duration: 223, categories: ['comedia', 'thriller'] },
    { title: 'El gato con guantes', duration: 111, categories: ['comedia', 'aventura', 'animación'] },
]

for (movie of movies) {
    for (category of movie.categories) {
        if (!categorias.includes(category)) {
            categorias.push(category)
        }/*else {
                categorias.push("duplicado")
            }*/
    }
}
console.log(categorias)



/* **Iteración #2: Mix Fors**

Dado el siguiente javascript usa forof y forin para hacer la media del volumen de 
todos los sonidos favoritos que tienen los usuarios.*/

const users = [
    {
        name: 'Manolo el del bombo',
        favoritesSounds: {
            waves: { format: 'mp3', volume: 50 },
            rain: { format: 'ogg', volume: 60 },
            firecamp: { format: 'mp3', volume: 80 },
        }
    },
    {
        name: 'Mortadelo',
        favoritesSounds: {
            waves: { format: 'mp3', volume: 30 },
            shower: { format: 'ogg', volume: 55 },
            train: { format: 'mp3', volume: 60 },
        }
    },
    {
        name: 'Super Lopez',
        favoritesSounds: {
            shower: { format: 'mp3', volume: 50 },
            train: { format: 'ogg', volume: 60 },
            firecamp: { format: 'mp3', volume: 80 },
        }
    },
    {
        name: 'El culebra',
        favoritesSounds: {
            waves: { format: 'mp3', volume: 67 },
            wind: { format: 'ogg', volume: 35 },
            firecamp: { format: 'mp3', volume: 60 },


        }
    },
]

//1.- recorremos el array completo con un forof
//2.- recorremos los objetos del array con un for in


let arrayNuevo = [];
let value;
for (const usuarios of users) {
    for (const key in usuarios.favoritesSounds) {
        arrayNuevo.push(usuarios.favoritesSounds[key].volume);
    }
}

let acumulador = 0;
let valorArray = arrayNuevo.length;
arrayNuevo.forEach((e) => {
    acumulador += e;
});
console.log('la media total es:', acumulador / valorArray);

/* **Iteración #3: Mix Fors**

Dado el siguiente javascript usa forof y forin para saber cuantas veces 
ha sido cada sonido agregado por los usuarios a favorito.
 Para ello recorre la lista de usuarios y usa forin para recoger
  el nombre de los sonidos que el usuario tenga como favoritos.
Una vez accedas a ellos piensa en la mejor forma de hacer un conteo
 de cada vez que ese sonido se repita como favorito en cada usuario.

Este ejercicio es un poco complicado con los conocimientos actuales pero...a la vez un buen reto
 y oportunidad para comprender que hay muchas formas de hacer las cosas en javascript.*/

const users1 = [
    {
        name: 'Manolo el del bombo',
        favoritesSounds: {
            waves: { format: 'mp3', volume: 50 },
            rain: { format: 'ogg', volume: 60 },
            firecamp: { format: 'mp3', volume: 80 },
        }
    },
    {
        name: 'Mortadelo',
        favoritesSounds: {
            waves: { format: 'mp3', volume: 30 },
            shower: { format: 'ogg', volume: 55 },
            train: { format: 'mp3', volume: 60 },
        }
    },
    {
        name: 'Super Lopez',
        favoritesSounds: {
            shower: { format: 'mp3', volume: 50 },
            train: { format: 'ogg', volume: 60 },
            firecamp: { format: 'mp3', volume: 80 },
        }
    },
    {
        name: 'El culebra',
        favoritesSounds: {
            waves: { format: 'mp3', volume: 67 },
            wind: { format: 'ogg', volume: 35 },
            firecamp: { format: 'mp3', volume: 60 },
        }
    },
]












/* **Iteración #4: Métodos findArrayIndex**

Crea una función llamada `findArrayIndex` que reciba como parametros un array de 
textos y un texto y devuelve la posición del array cuando el valor del array sea igual 
al valor del texto que enviaste como parametro. Haz varios ejemplos y compruebalos.

Sugerencia de función:*/

//function findArrayIndex(array, text) {}


//Ej array:
//['Caracol', 'Mosquito', 'Salamandra', 'Ajolote']


const animales = ['Caracol', 'Mosquito', 'Salamandra', 'Axolotl']

const buscador = (array, text) => {
    array.forEach((element, index) => {
        if (text == element) {
            console.log(index)
        }
    })
}

buscador(animales, "Caracol")
buscador(animales, "Salamandra")
buscador(animales, "Axolotl")
buscador(animales, "Mosquito")
buscador(animales, "PV")

//1.- crear funcion findArrayIndex
//2.- este Array debe recibir 2 parametros: array de textos y 1 texto
//3.- devuelve la posicion (indice) del array cuando el valor del array sea = al valor del texto que enviaste como parametro.
//4.- haz varios ejemplos, y compruebalos :3 
/*---------------------------------------------------*/

/* **Iteración #5: Función rollDice**

Crea una función llamada **rollDice()** que reciba como parametro el 
numero de caras que queramos que tenga el dado que deberá silumar el 
codigo dentro de la función. Como hemos dicho, que la función use el 
parametro para simular una tirada de dado y retornar el resultado. Si 
no se te ocurre como hacer un numero aleatorio no te preocupes! busca 
información sobre la función de javascript **Math.random();** */

console.log("---------------")
const rollDice = (caras) => {
    console.log(parseInt(Math.random() * caras))
}

rollDice(6)


/* **Iteración #6: Función swap**

Crea una función llamada `swap()` que reciba un array
 y dos parametros que sean indices del array. La función 
 deberá intercambiar la posición de los valores de los indices 
 que hayamos enviado como parametro. Retorna el array resultante.

Sugerencia de array:
['Mesirve', 'Cristiano Romualdo', 'Fernando Muralla', 'Ronalguiño'] */

