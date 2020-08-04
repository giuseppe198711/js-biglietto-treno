
// richiede all'utente la sua età
var eta = prompt("inserisci la tua età");

// richiedi all'utente quanti km deve percorrere
var km = prompt("quanti km devi percorrere");



// calcolo prezzo del biglietto
var prezzoBiglietto = km * 0.21;

// applicare sconto del 20% ai minorenni
var scontoMinorenni = prezzoBiglietto * 20 / 100;

// prezzo del biglietto per utene minorenne
var prezzoBigliettoMinorenne = prezzoBiglietto - scontoMinorenni;

// applicare sconto del 40% agli over 65
var scontoOver = prezzoBiglietto * 40 / 100;

// prezzo del biglietto per utene minorenne
var prezzoBigliettoOver = prezzoBiglietto - scontoOver;

// fascia di età a cui applicare lo sconto
if (eta >= 65) {
  console.log(prezzoBigliettoOver);
  document.getElementById('costo').innerHTML = prezzoBigliettoOver.toFixed(2);

}

else if (eta < 18) {
  console.log(prezzoBigliettoMinorenne);
  document.getElementById('costo').innerHTML = prezzoBigliettoMinorenne.toFixed(2);
}

else {
  console.log(prezzoBiglietto);
   document.getElementById('costo').innerHTML = prezzoBiglietto.toFixed(2);
 }
