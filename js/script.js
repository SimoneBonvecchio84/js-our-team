//MILESTONE 0
// array di oggetti 
const ourTeam = [{
    name: "Wayne Barrett",
    profession: "Founder & CEO",
    image: "img-Wayne",
},
{
    name: "Angela Caroll",
    profession: "Chief Editor",
    image: "img-Angela",
},
{
    name: "Walter Corsini",
    profession: "Office Manager",
    image: "img-Walter",

},
{
    name: "Angela Lopez",
    profession: "Social Media Manager",
    image: "img-Anglea.L.",
},
{
    name: "Scott Estrada",
    profession: "Developer",
    image: "img-Scott",
},
{
    name: "Barbara Ramos",
    profession: "Graphic Designer",
    image: "img-Barbara",
},
];
// TEST
console.log(ourTeam)
//MILESTONE 1
// Creo un ciclo for per stampare in console gli oggetti presenti
// nel nostro array

for (let i = 0; i < ourTeam.length; i++) {
    const currElem = ourTeam[i]; // oggetto 
    console.log("----------------------");
    // console.log(currElem);

    // Utilizzo sintassi for...in

    for (let key in currElem) {
        console.log(currElem[key]);
    }
}
//MILESTONE 2

