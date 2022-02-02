/*
#### Bonusopdracht

1. Maak drie knoppen op de pagina: `Sorteer op prijs`, `AmbiLight TV's` en `Uitverkochte exemplaren`. Gebruik de code
die je in opdracht 1b, 1c en 1d hebt gemaakt en schrijf dit om naar functies zodat je ze kunt aanroepen op het moment
dat de buttons geklikt worden. Zorg ervoor dat de functies de uitkomsten in de de console loggen als de gebruiker op
de bijbehorende knop klikt. _Tip_: lees hiervoor paragraaf 7.4 op EdHub eens door!
    2. Zorg er nu voor, in plaats van dat de uitkomsten in de console worden gelogd, dat de uitkomsten worden meegegeven aan
jouw `generateTV`-functie zodat de resultaten daadwerkelijk op de pagina weergegeven worden!*/


// sla de referentie naar het button-element op
const sorteerOpPrijs = document.getElementById('Sorteer op prijs');

// plaats er een event listener op zodat wanneer deze getriggerd wordt, deze functie uitgevoerd wordt
sorteerOpPrijs.addEventListener('click', displaySortedTvs);


function displaySortedTvs() {
    TvSortering(inventory);
    TvGenerator(inventory);
}

// sla de referentie naar het button-element op
const ambiLightTV = document.getElementById('ambiLightTV');

// plaats er een event listener op zodat wanneer deze getriggerd wordt, deze functie uitgevoerd wordt
ambiLightTV.addEventListener('click', TvAmbiLights);


function TvAmbiLights() {
    let tvAmbiLights = inventory.filter((tv => tv.options.ambiLight));
    TvGenerator(tvAmbiLights);
}


// sla de referentie naar het button-element op
const uitverkocht = document.getElementById('Uitverkochte exemplaren');

// plaats er een event listener op zodat wanneer deze getriggerd wordt, deze functie uitgevoerd wordt
uitverkocht.addEventListener('click', TvUitverkocht);


function TvUitverkocht() {
     let tvUitverkocht = inventory.filter((tv => tv.originalStock === tv.sold));
    TvGenerator(tvUitverkocht);
}


