/* Consegna:
Scrivi un programma che stampi in console i numeri da 1 a 100 all’avvio della pagina.
MILESTONE 1
Per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi “Buzz”.
Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.
MILESTONE 2
Dato un container nel DOM, appendi un elemento html con il numero o la stringa corretta.
MILESTONE 3
Applica uno stile differente a seconda del valore dell’indice per i multipli di 3, per i multipli di 5 e per i valori che sono sia multipli di 3 che di 5.
Prima di partire a scrivere codice poniamoci qualche domanda:
Come faccio a sapere se un numero è divisibile per un altro? Abbiamo visto qualcosa di particolare che possiamo usare? Come creare nuovi elementi html e appenderli al container?
Consigli del giorno:
1. scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare
2. proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo faremmo “a mano” */

// Creo una variabile che fa riferimento al contenitore che dovrà contenere i blocchi colorati con i numeri
const numbersContainer = document.getElementById("contenitoreNumeri");

// Inizio a contare
for (let i = 1; i <= 100; i++) {
    // Il testo da stampare sarà uguale al contatore
    let testoDaStampare = i.toString();
    // Creo una variabile per impostare una classe che dia lo sfondo ai singoli div. Di default sarà blu
    let sfondoDiv = "bg-blue";
    if (i % 3 === 0 && i % 5 === 0) {
        // Per i multipli di 3 E di 5, modifico il testo da stampare in "FizzBuzz" e il colore di sfondo in rosso
        testoDaStampare = "FizzBuzz";
        sfondoDiv = "bg-red";
    }else if (i % 3 === 0) {
        // Per i multipli solo di 3, modifico il testo da stampare in "Fizz" e il colore di sfondo in verde
        testoDaStampare = "Fizz";
        sfondoDiv = "bg-green";
    } else if (i % 5 === 0) {
        // Per i multipli solo di 5, modifico il testo da stampare in "Buzz" e il colore di sfondo in giallo
        testoDaStampare = "Buzz";
        sfondoDiv = "bg-yellow";
    }
    //Stampiamo i numeri da 1 a 100 all'avvio della pagina
    console.log(testoDaStampare);
    // Per ogni numero creo un div per la colonna. Al suo interno inserisco un div con delle classi Bootstrap per allinearne il contenuto e aggiungo la classe per il colore
    numbersContainer.innerHTML += ` <div>
                                        <div class="row justify-content-center align-items-center square fw-bold ${sfondoDiv}">
                                            ${testoDaStampare}
                                        </div>
                                    </div>`;
}