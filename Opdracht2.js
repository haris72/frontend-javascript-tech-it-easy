/*
#### Opdracht 2 - Elementen in de DOM plaatsen

* **_Tip_: wanneer we meerdere waardes uit een array willen terugbrengen tot één getal of één string, gebruik je hier gewoon
* **een oude vertrouwde for-loop voor!
 */
//* **Opdracht 2a:** Hoeveel tv's zijn er al verkocht? Schrijf een script dat dit berekent. Log de uitkomst in de console.


let sold = 0;
for (let i = 0; i < inventory.length; i++){
    sold = sold + inventory[i].sold;
}

console.log(sold);



// * **Opdracht 2b:** Zorg ervoor dat dit aantal _in het groen_ wordt weergegeven op de pagina.

element = document.getElementById("sold");
element.textContent = sold

// * **Opdracht 2c:** Hoeveel tv's heeft Tech It Easy ingekocht? Schrijf een script dat dit berekent. Log de uitkomst in de
// console.

let ingekocht = 0;
for (let i = 0; i < inventory.length; i++){
    ingekocht = ingekocht + inventory[i].originalStock;
}

console.log(ingekocht);


// * **Opdracht 2d:** Zorg ervoor dat dit aantal _in het blauw_ wordt weergegeven op de pagina.

element2 = document.getElementById("ingekocht");
element2.textContent = ingekocht


// * **Opdracht 2e:** Geef _in het rood_ weer hoeveel tv's er nog verkocht moeten worden.*/

let teVerkopen = 0;
for (let i = 0; i < inventory.length; i++){
    teVerkopen = teVerkopen + (inventory[i].originalStock - inventory[i].sold);
}

console.log(teVerkopen);
element3 = document.getElementById("teVerkopen");
element3.textContent = teVerkopen
