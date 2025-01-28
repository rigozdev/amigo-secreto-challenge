// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.


//array de amigos
let amigos = [];
const amigosTest = ['Jaime', 'Jano', 'Pato', 'Rodrigo'];

function clearInput() {
    document.getElementById("amigo").value = '';
}

function imprimeAmigos() {
    const listaHTML = document.getElementById("listaAmigos");

    listaHTML.innerHTML = "";

    for (i = 0; i < amigos.length; i++) {

        //Se crea elemento <li>
        const li = document.createElement('li');

        //Se asigna el nombre del amigo como contenido del <li>
        li.textContent = amigos[i];

        //Se agrega el <li> al <ul>
        listaHTML.appendChild(li);
    }
}

function sorteaAmigo() {
    if (amigos.length > 0) {

        //Se asigna el contenedor de <li> (resultado => <ul>)
        const listaHTML = document.getElementById("resultado");

        //Vaciamos previamente el contenedor <ul>
        listaHTML.innerHTML = "";

        //Asignamos (creamos) un elmento <li>
        const li = document.createElement('li');

        //Valor random dentro de arreglo de amigos se asigna a una variable
        let amigo = amigos[Math.floor(Math.random() * amigos.length - 1) + 1];

        //Se asigna el contenido de la posición de lista amigos a un elemento <li>
        li.textContent = amigo;

        //Se agrega como hijo el <li> creado
        listaHTML.appendChild(li);
    } else {
        alert('Por favor agrega amigos.');
    }
}

function agregarAmigo() {

    //Se obtiene el value del input de amigo ingresado
    let newFriend = document.getElementById("amigo").value;

    //Se evalúa
    if (newFriend !== '' && newFriend.length >= 2) {
        amigos.push(newFriend);
    } else {
        alert('Por favor, inserte un nombre.');
    }

    clearInput();
    imprimeAmigos();
};


