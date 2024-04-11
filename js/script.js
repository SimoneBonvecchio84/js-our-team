//MILESTONE 0
// array di oggetti 
const ourTeam = [{
    name: "Wayne Barrett",
    profession: "Founder & CEO",
    image: "../img/wayne-barnett-founder-ceo.jpg",
},
{
    name: "Angela Caroll",
    profession: "Chief Editor",
    image: "../img/angela-caroll-chief-editor.jpg",
},
{
    name: "Walter Corsini",
    profession: "Office Manager",
    image: "../img/walter-gordon-office-manager.jpg",

},
{
    name: "Angela Lopez",
    profession: "Social Media Manager",
    image: "../img/angela-lopez-social-media-manager.jpg",
},
{
    name: "Scott Estrada",
    profession: "Developer",
    image: "../img/scott-estrada-developer.jpg",
},
{
    name: "Barbara Ramos",
    profession: "Graphic Designer",
    image: "../img/barbara-ramos-graphic-designer.jpg",
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
const teamCol = document.querySelector(".col");

const img = document.createElement("img");
img.classList.add("team-img");

for (let i = 0; i < ourTeam.length; i++) {
    const currElem = ourTeam[i];
    img.src = currElem.image; 
    // Stampo in pagina grazie ai template literals gli oggetti
    // dell' array
    teamRow.innerHTML += `
      <div class="col">
       
           <div class="card">
           
              <div class="card-img">${img.outerHTML}</div>
              <h5 class="card-name">${currElem.name}</h5>
              <h6 class="card-profession">${currElem.profession}</h6>
        
           </div>
    
      </div>
    
    `
}

