let numeroUno = prompt("Inserisci un numero");

let numeroDue = prompt("Inserisci un numero");

numeroUno = Number(numeroUno);

numeroDue = Number(numeroDue)
 

if (numeroUno < numeroDue) {
   
    document.getElementById("vFrase").innerHTML = `${numeroDue} - secondo numero`;

} else if (numeroUno > numeroDue) {
    document.getElementById("vFrase").innerHTML = `${numeroUno} - primo numero`;

} else {
    
    document.getElementById("vFrase").innerHTML = "I due numeri sono uguali";
}