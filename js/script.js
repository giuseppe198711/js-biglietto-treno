alert();
// richiede all'utente la sua età
var età = prompt("inserisci la tua età");

// richiedi all'utente quanti km deve percorrere
var km = prompt("quanti km devi percorrere");



// calcolo prezzo del biglietto
var prezzoBiglietto = km * 0.21;

// applicare sconto del 20% ai minorenni
var scontoMinorenni = prezzoBiglietto * 20 / 100;

var prezzoBigliettoMinorenne = prezzoBiglietto - scontoMinorenni;

// applicare sconto del 40% agli over 65
var scontoOver = prezzoBiglietto * 40 / 100;

var prezzoBigliettoOver = prezzoBiglietto - scontoOver;

console.log(prezzoBiglietto);










if (eta >= 65) {
  alert('sei nella fascia anzianità hai diritto a uno sconto del 40%');
}

else if (eta < 18) {
  alert('sei maggiorenne hai diritto a uno sconto del 20%');
}

else
