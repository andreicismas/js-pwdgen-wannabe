var myName =prompt("Il Tuo Nome ");
console.log( "The First Name " + myName)  ;
          
var secondName =prompt("Il Tuo Cognome");
console.log(  "Second Name Is"+ secondName);

var color =prompt("Il Tuo Colore");
console.log( "Favorit Color Is"+ color); 

document.getElementById("my_name").innerHTML= "The Name Is: " + myName ;

document.getElementById("second_name").innerHTML= "The Second Name Is: " + secondName ;

document.getElementById("color").innerHTML= "The Favorit Color Is: " + color ;

document.getElementById("number_21").innerHTML= "The Favorit Number Is: " + " " + "21" ;



