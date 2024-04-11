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
// stampo in pagina le card del mio team
const teamRow = document.querySelector(".row");
// creo ciclo for per selezionare ogni oggetto dell'array
for (let i = 0; i < ourTeam.length; i++) {
    const currElem = ourTeam[i];
    teamRow.innerHTML += `
      <div class="col">
       
           <div class="card">
           
              <div class="card-img">${currElem.image}</div>
              <h5 class="card-name">${currElem.name}</h5>
              <h6 class="card-profession">${currElem.profession}</h6>
        
           </div>
    
      </div>
    
    `
}
