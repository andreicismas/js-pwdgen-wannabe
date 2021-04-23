// chiedi al utente il suo nome
var nome = prompt("inserisci il tuo nome");
// chiedi al utente il suo cognome
var cognome = prompt("inserisci il tuo cognome");

// chiedi al utente il suo colore preferito 
var colore = prompt("inserisci il tuo colore preferito ");

// verifica in console
console.log("il tuo nome e " + nome + " " + cognome);
console.log("il tuo colore preferito  e" + colore + " " + "e hai il nr 21 come portafortuna")

// stampo pure in html nome ,cognome colore e nr

var nomePrompt = document.getElementById("my_name");
nomePrompt.innerHTML = "ciao il tuo nome e" + " " + "<em>" + nome + "</em>"

var cognomePrompt = document.getElementById("second_name");
cognomePrompt.innerHTML = "ciao il tuo cognome e" + " " + "<em>" + cognome + "</em>"

var corolePrompt = document.getElementById("preferit_color");
corolePrompt.innerHTML = "ciao il tuo colore preferito  e" + " " + "<em>" + colore + "</em>"

var nrPrompt = document.getElementById("number_21");
nrPrompt.innerHTML = "e hai il nr <em>21</em> come portafortuna"



