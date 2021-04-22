// Istruzioni:
// Chiedi all’utente il suo nome,
// poi chiedi il suo cognome,
// poi chiedi il suo colore preferito
// Infine scrivi sulla pagina il risultato nomecognomecolorepreferito21


// Chiedi all’utente il suo nome

var username = prompt("Quale è il tuo nome?");
console.log();

// poi chiedi il suo cognome

var surname = prompt("Quale è il tuo cognome?");

// poi chiedi il suo colore preferito

var color = prompt("Quale è il tuo colore preferito?");

// Numero

var number = 21;

// Creiamo var password

var password = username + surname + color + number;

// Creaiamo var password in uppercase

var uppercasePassword = password.toUpperCase();

// Risultato password in uppercase

var resultElement = document.getElementById("result");

resultElement.innerHTML = uppercasePassword;



