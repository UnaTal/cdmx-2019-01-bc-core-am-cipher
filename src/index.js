//Declarar mi constante message
const message = document.getElementById('message');
const offset = document.getElementById('offset');
const encodeButton = document.getElementById('encodeButton');
//console.log(encodeButton)
//agrega evento al botón e indica que hace referencia a la función encode
encodeButton.addEventListener('click', () => {
    const messageB = message.value.toUpperCase();
    const offsetB = offset.value;
    
    window.cipher.encode(offsetB, messageB);
 });
    
    