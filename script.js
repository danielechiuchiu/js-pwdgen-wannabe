var nome = prompt('Scrivi il tuo nome:');

var cognome = prompt('Scrivi il tuo cognome:');

var colore = prompt('ora il tuo colore preferito:')

var numero = prompt('infine inserisci un numero:');

var password = nome + cognome + colore + numero;
document.getElementById("password").innerHTML = "La tua Password è:nbsp"+ password;
