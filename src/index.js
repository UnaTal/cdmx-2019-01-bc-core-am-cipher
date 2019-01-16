const messageRecieved = document.getElementById('message').value.toUpperCase(); //Declarar la constante message con input
document.getElementById("message").innerHTML = 'tu mensaje es ' + messageRecieved;
const offset = document.getElementById('offset').value;// Offset tiene un valor
const encript = document.getElementById('encript');
let messageEncode =''

buttonEncode.addEventListener('click', window.cipher.encode);//agrega evento al botón e indica que hace referencia al encode
