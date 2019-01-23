//Declarar constantes globales
const message = document.getElementById('message');
const offset = document.getElementById('offset');
const encodeButton = document.getElementById('encodeButton');
const decodeButton = document.getElementById('decodeButton');
//console.log(encodeButton)
//agrega evento al botón Cifrar e indica que hace referencia a la función encode
encodeButton.addEventListener('click', () => {
    const messageB = message.value.toUpperCase();
    const offsetB = offset.value;
    const encodeB = window.cipher.encode(offsetB, messageB);
    message.value = encodeB
 });
//agrega evento al botón Descifrar e indica que hace referencia a la función decode
 decodeButton.addEventListener('click', () => {
    const messageD = message.value.toUpperCase();
    const offsetD = offset.value;
    const decodeB = window.cipher.decode(offsetD, messageD);
    message.value = decodeB
 });
    