// #### Opdracht 4 -Functies
//
// Maak deze gehele opdracht eerst alsof je het voor één tv doet. We gaan één tv weergeven in het volgende format:
//
//     ```
//   Philips 43PUS6504/12 - 4K TV
//   €379,-
//   43 inch (109 cm) | 50 inch (127 cm) | 58 inch (147 cm)
//
//   NIKKEI NH3216SMART - HD smart TV
//   €159,-
//   32 inch (81 cm)
//   ```
//
//     * **Opdracht 4a:** Zorg ervoor dat er een string wordt gegenereerd voor de naam van een tv. Maak een functie die één
// enkel tv-object (zoals `inventory[0]` of `inventory[6]`) verwacht en de naam op de volgende manier
// samenvoegt: `[merk] [type] - [naam]` zoals `Philips 43PUS6504/12 - 4K TV` of `NIKKEI NH3216SMART - HD smart TV`. Test
// of jouw functie ook werkt wanneer er een ander tv object wordt meegegeven.
//
// * **Opdracht 4b:** Zorg ervoor dat de prijs van een tv netjes geformat wordt. Maak een functie die één tv-prijs als
// parameter verwacht (zoals `379`) en daar de volgende string van maakt: `€379,-`. Test of jouw functie ook werkt
// wanneer er een andere tv-prijs wordt meegegeven.
//
// * **Opdracht 4c:** Zorg ervoor dat er een string wordt gegenereerd voor alle beschikbare schermgroottes van één tv, in
// zowel _inches_ als _cm_. Doe dit door een functie te schrijven die één screen-sizes array verwacht (
//     zoals `inventory[0].availableSizes`) en de groottes op de volgende manier
// samenvoegt: `[schermgrootte] inches ([schermgrootte omgerekend]cm) | [schermgrootte] inches ([schermgrootte omgerekend]cm)`
// etc. Als een tv maar één schermgrootte heeft (`[32]`) wordt de output `32 inch (81 cm)`. Wanneer een tv vier
// schermgroottes heeft (`[43, 50, 55, 58]`) wordt de output `43 inch (109 cm) | 50 inch (127 cm) | 58 inch (147 cm)`.
//     Test of jouw functie werkt in alle mogelijke gevallen.
//
// * **Opdracht 4d:** Zorg ervoor de informatie van één van de tv's zoals het voorbeeld wordt weergegeven op de pagina.
// Gebruik hiervoor de functies die je hebt gemaakt in opdracht 5a, 5b en 5c.
//
// * **Opdracht 4e:** Schrijf een functie die ALLE tv's weergeeft op de pagina zoals in het voorbeeld. Dit wil je
// natuurlijk niet acht keer opnieuw schrijven, want nu zijn het 8 tv's, maar in de toekomst misschien wel 200!
// Gebruik in deze functie de voorgaande functies die je hebt geschreven, om onderdelen van de data te formatten. De
// overkoepelende "tv-generator-functie" verwacht één parameter: de volledige array met tv-objecten. Vergeet 'm niet aan
// te roepen!






//* **Opdracht 4a:** Zorg ervoor dat er een string wordt gegenereerd voor de naam van een tv. Maak een functie die één
// enkel tv-object (zoals `inventory[0]` of `inventory[6]`) verwacht en de naam op de volgende manier
// samenvoegt: `[merk] [type] - [naam]` zoals `Philips 43PUS6504/12 - 4K TV` of `NIKKEI NH3216SMART - HD smart TV`. Test
// of jouw functie ook werkt wanneer er een ander tv object wordt meegegeven.


function TvObjectString(tvObject) {
    return ` ${tvObject.brand} ${tvObject.type}  - ${tvObject.name}`;
}

TvObjectString(inventory[3]);


// * **Opdracht 4b:** Zorg ervoor dat de prijs van een tv netjes geformat wordt. Maak een functie die één tv-prijs als
// parameter verwacht (zoals `379`) en daar de volgende string van maakt: `€379,-`. Test of jouw functie ook werkt
// wanneer er een andere tv-prijs wordt meegegeven.

function TvPrijsString(tvPrice) {
    return  ` €${tvPrice},-`;
}

TvPrijsString(inventory[3].price);


// * **Opdracht 4c:** Zorg ervoor dat er een string wordt gegenereerd voor alle beschikbare schermgroottes van één tv, in
// zowel _inches_ als _cm_. Doe dit door een functie te schrijven die één screen-sizes array verwacht (
//     zoals `inventory[0].availableSizes`) en de groottes op de volgende manier
// samenvoegt: `[schermgrootte] inches ([schermgrootte omgerekend]cm) | [schermgrootte] inches ([schermgrootte omgerekend]cm)`
// etc. Als een tv maar één schermgrootte heeft (`[32]`) wordt de output `32 inch (81 cm)`. Wanneer een tv vier
// schermgroottes heeft (`[43, 50, 55, 58]`) wordt de output `43 inch (109 cm) | 50 inch (127 cm) | 58 inch (147 cm)`.
//     Test of jouw functie werkt in alle mogelijke gevallen.


function TvAvailableSizes(tvAvailableSize) {
    let size = '';
    let i;
    tvAvailableSize.map((tv2) => {
        const tvCm = (tv2* 2.54).toFixed(0);
        size += `${tv2} inch (${tvCm} cm) | `;
    })
    return `${size}`;
}

TvAvailableSizes(inventory[3].availableSizes);

/*
of

function TvAvailableSizes(tvAvailableSize) {

    let availableSize = document.getElementById('tvAvailableSize');
     for (let available of tvAvailableSize) {
         const availableSizeCm = available * 2.54;
         availableSize.textContent += ` ${available} inch (${availableSizeCm} cm) | `;
     }
}

TvAvailableSizes(inventory[3].availableSizes);
*/


// * **Opdracht 4d:** Zorg ervoor de informatie van één van de tv's zoals het voorbeeld wordt weergegeven op de pagina.
// Gebruik hiervoor de functies die je hebt gemaakt in opdracht 5a, 5b en 5c.


const TvObjects3 = document.getElementById('tvObject3');
TvObjects3.innerHTML = `
        <h4>${TvObjectString(inventory[4])}</h4>
        <h4>${TvPrijsString(inventory[4].price)}</h4>
        <h4>${TvAvailableSizes(inventory[4].availableSizes)}</h4>
        </br></br>
 `;


// * **Opdracht 4e:** Schrijf een functie die ALLE tv's weergeeft op de pagina zoals in het voorbeeld. Dit wil je
// natuurlijk niet acht keer opnieuw schrijven, want nu zijn het 8 tv's, maar in de toekomst misschien wel 200!
// Gebruik in deze functie de voorgaande functies die je hebt geschreven, om onderdelen van de data te formatten. De
// overkoepelende "tv-generator-functie" verwacht één parameter: de volledige array met tv-objecten. Vergeet 'm niet aan
// te roepen!


function TvGenerator (alleTvObjecten) {
    const TvObjects = document.getElementById('alleTvObjecten');
    const TvObject = alleTvObjecten.map((tvObject) => {
        return `
        <h4>${TvObjectString(tvObject)}</h4>
        <h4>${TvPrijsString(tvObject.price)}</h4>
        <h4>${TvAvailableSizes(tvObject.availableSizes)}</h4>
        </br>
`
    });
    TvObjects.innerHTML = `${TvObject.join(" ")}`;
}

TvGenerator(inventory);