let ParolaUno = prompt("Inserisci una parola");

let ParolaDue = prompt("Inserisci una parola");

let numeroUno = Number(ParolaUno.length);

let numeroDue = Number(ParolaDue.length);


if (numeroUno < numeroDue) {

    document.getElementById("vFrase").innerHTML = `${ParolaUno}-${ParolaDue} `;

} else if (numeroUno > numeroDue) {
    document.getElementById("vFrase").innerHTML = `${ParolaDue}-${ParolaUno} `;

} else {

    document.getElementById("vFrase").innerHTML = "Le due parole sono lunghe uguali";
}