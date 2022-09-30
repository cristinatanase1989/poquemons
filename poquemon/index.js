// Reto 1 - hacer un fetch a la pokeapi y mostrar el nombre del pokemon en  un console.log
// Reto 2 - Hacer un html con un input y una lista y darle estilo
// Reto 3 - Hacer que al pulsar una tecla en el input se vea en un console.log el valor del input
// Reto 4 - Hacer una array con la informacion de los 151 primeros pokemons
// Reto 5 - Mostrar en la lista el nombre y la imagen de los pokemons
//Reto 6  - bonus filtrar la lista por el nombre del poquemon que esta en el input



//paso 1

//creo una constante que es asincrona
const paso1 = async () =>{
    // pongo el fetch que es una promesa, y esto recibe una respuesta
    // si es fetch automaticamente se tiene que poner un json
    // si es un await se tiene que poner despues tmb un await y un response
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/1`);
    // json retorna una pro,esa con el contenido del fetch
    // hago otra constante donde tengo que poner la respuesta del fetch que se tiene que llamar data....?
    const data = await response.json();
    //lemos la respuesta
    console.log(data.name)
}


// Reto 3 - Hacer que al pulsar una tecla en el input se vea en un console.log el valor del input
const paso3 = () => {
    const input = document.querySelector('#search');
    // el keyup se busca por internet porque es una peticion appi, tmb existe keydawn y muchos mas
    input.addEventListener('keyup', () => {
        console.log(input.value);
    })
}

// Reto 4 - Hacer una array con la informacion de los 151 primeros pokemons

const paso4A = async () => {
    // OPCION A (LA QUE HAY QUE ENTENDER)
    // Creamos la array donde vamos a guardar la informacion de los pokemons
    const pokemons = [];
    // Buscamos los pokemon con los id del 1 al 151 y por eso tenemos que hacer un for
    for (let id = 1; id <= 151; id++) {
        // fetch nos da le respuesta de la peticion, ponemos el id porque asi nos da todos los id(del 1  al 151)
        // como hacemos un fetch automaticamente nos pide hacer un json 
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
        // con el json obtenemos la informacion de la respuesta
        const data = await response.json();
        // Guardamos la informacion del pokemon en la array que hemos creado, que es el array de ariba pokemons, que la hamos creado antes
        pokemons.push(data)
        // hacemos el push ......
    }
    // En la variable pokemons tendremos la informacion de todos los pokemons que hemos consultado
}


// Reto 5 - Mostrar en la lista el nombre y la imagen de los pokemons

const list = document.querySelector(`#list`);
let html = ``

for (let index = 0; index < array.length; index++) {
    const element = array[index];
    
}