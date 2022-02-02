//Opdracht 1a:** Gebruik een array-methode om een array te maken met alle tv-type namen. Log de uitkomst in de
//console.


const tvName = inventory.map((tv => tv.name));
console.log(tvName);


//Opdracht 1b:** Gebruik een array-methode om alle tv's te verzamelen (de hele objecten) die volledig uitverkocht
//zijn. Log de uitkomst in de console.


const tvUitverkocht = inventory.filter((tv => tv.originalStock === tv.sold));
console.log(tvUitverkocht);


//Opdracht 1c:** Gebruik een array-methode om alle tv's te verzamelen (de hele objecten) die over AmbiLight
//beschikken. Log de uitkomst in de console.


let tvAmbiLight = inventory.filter((tv => tv.options.ambiLight))
console.log(tvAmbiLight);


//Opdracht 1d:** Schrijf een functie die alle tv's van laagste naar hoogste prijs sorteert. Log de uitkomst in de
//console.

function TvSortering(tvSortering) {
    const Sortering = inventory.sort((a, b) => a.price - b.price);
    console.log(Sortering);
}
