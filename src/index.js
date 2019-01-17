const messageRecieved = document.getElementById('message'); //Declarar la constante message con input
const offset = document.getElementById('offset');// Offset tiene un valor
const buttonEncode = document.getElementById('encodeButton');
let encodeC = '';

buttonEncode.addEventListener('click', () => {
    const messageB = messageRecieved.value.toUpperCase();
    const offsetB = offset.value

    window.cipher.encode(offsetB, messageB)
};//agrega evento al botón e indica que hace referencia a la función encode

