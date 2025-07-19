
let livres = [
    { titre: "Harry Potter", author: "J.K. Rowling", year: 1997 },
    { titre: "Le Petit Prince", author: "Saint-Exupéry", year: 1943 }
];



document.getElementById("show").addEventListener("click", function () {
    let ul = document.createElement("ul");
    livres.forEach(function (livre) {
        let li = document.createElement("li");
        li.textContent = `${livre.titre} written by ${livre.author} in ${livre.year}`;
        ul.appendChild(li);
    });
    document.getElementById("list").innerHTML = "";
    document.getElementById("list").appendChild(ul);
});




document.getElementById("add").addEventListener("click", function () {
    let titre = document.getElementById("title").value.trim();
    let author = document.getElementById("author").value.trim();
    let year = document.getElementById("year").value.trim();

    livres.push({ titre: titre, author: author, year: year });
});



document.getElementById("find").addEventListener("click", function () {
    let search = document.getElementById("search").value.trim();
    for (let livre in livres) {
        if (livres[livre]["titre"] == search) {
            document.getElementById("result").textContent = `${livres[livre]["titre"]} written by ${livres[livre]["author"]} in ${livres[livre]["year"]}`;
        };
    };
});

















/*
////////////

let livres = [];
localStorage.setItem("MesLivres", JSON.stringify(livres));


let recup = localStorage.getItem("MesLivres");
let tab = recup ? JSON.parse(recup) : [];

if (!Array.isArray(tab)) tab = [];

tab.push({ titre: "Livre ajouté" });
localStorage.setItem("MesLivres", JSON.stringify(tab));
//////////



//////
let texte = JSON.stringify(mesLivres);

localStorage.setItem("Mes Livres", texte);



let Recup = localStorage.getItem("Mes Livres");

let Tableau = Recup ? JSON.parse(Recup) : [];

console.log(Array.isArray(Tableau));
Tableau = [];
console.log(Array.isArray(Tableau));

Tableau.push({ titre: "Nouveau", auteur: "Quelqu’un", annee: 2025 });
localStorage.setItem("MesLivres", JSON.stringify(Tableau));
//////
*/
