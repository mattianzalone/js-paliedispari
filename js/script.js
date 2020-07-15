var parola = prompt('Inserisci la parola')
var stringa = parola;
var risultato = estraiStringa(stringa);
console.log(parola);
console.log(risultato);




function estraiStringa(stringaInversa){
    var estratta= '';
    for (var i=stringa.length-1; i>=0 ; i--) {
        estratta += stringa[i];
    if (stringa == estratta) {
        document.getElementById('risultato').innerHTML = 'La parola è palindroma';
    } else {
        document.getElementById('risultato').innerHTML = 'La parola non è palindroma';
    }

    }
    return estratta;
}
