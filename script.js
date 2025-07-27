let show = document.getElementById("show");
let list = document.getElementById("list");
let add = document.getElementById("add");
let find = document.getElementById("find");
let result = document.getElementById("result");
let searchR = document.getElementById("searchR");
let resultR = document.getElementById("resultR");
let listR = document.getElementById("listR");

let livres = [];
let texte = JSON.stringify(livres);

show.addEventListener("click", function () {                 // To show the list of books
    let recup = localStorage.getItem("livres");              // To load the library "livres" on the local storage  
    if (recup) {                                             // If there is a library
        livres = JSON.parse(recup);                          // Put it into the list "livres"
        if (livres.length === 0) {                           // if there is no books
            list.textContent = "No books found.";
        } else {                                             // if there are at least one book
            let ul = document.createElement("ul");           
            livres.forEach(function (livre) {                // For each book of books, make a "li", and add it to "ul"
                let li = document.createElement("li");
                li.textContent = `${livre.titre} written by ${livre.author} in ${livre.year}`;
                ul.appendChild(li);
            });
            list.innerHTML = "";
            list.appendChild(ul);
        };

    } else {                                                // If there is no library "livres"
        list.innerHTML = "";
        list.innerHTML = `No library on ° livres ° found ! <br> Please add one !`;
    };

});



add.addEventListener("click", function () {                        // to add a book            
    let titre = document.getElementById("title").value.trim();
    let author = document.getElementById("author").value.trim();
    let year = document.getElementById("year").value.trim();

    if (titre && author && year) {                                  // if all inputs are available
        let recup = localStorage.getItem("livres");
        if (recup) {
            livres = JSON.parse(recup);       
            livres.push({ titre: titre, author: author, year: year }); // add the book to the local storage
            localStorage.setItem("livres", JSON.stringify(livres));    // update the local storage
            alert("Book added !");

        } else {                                                       
            livres.push({ titre: titre, author: author, year: year });
            localStorage.setItem("livres", JSON.stringify(livres));
            alert("Book added !!");
        };
    } else {
        alert("Please enter all the infos.");
    };
});



find.addEventListener("click", function () {                                // search by a titile of a book
    let search = document.getElementById("search").value.trim();
    let found = false;
    if (search) {

        let recup = localStorage.getItem("livres");                          // load storage
        if (recup) {
            livres = JSON.parse(recup);
            if (livres.length === 0) {
                result.textContent = "Empty library.";
            } else {
                for (let livre in livres) {                                    // parse the list and get all books with the title given
                    if (livres[livre]["titre"] == search) {
                        result.textContent = `${livres[livre]["titre"]} written by ${livres[livre]["author"]} in ${livres[livre]["year"]}`;
                        found = true;
                        break;
                    };
                };
                if (!found) { result.textContent = "Book not found."; };
            };
        } else {
            result.textContent = "No library found.";
        };

    } else {
        alert("Please enter the title !");
    };

});




searchR.addEventListener("input", function () {

    let query = searchR.value.trim().toLowerCase();
    let recup = localStorage.getItem("livres");
    if (query === "") {
        listR.innerHTML = "";
        resultR.textContent = "";
        return;
    };
    if (recup) {
        livres = JSON.parse(recup);
        let filtered = livres.filter(book => book.titre.toLowerCase().includes(query));
        listR.innerHTML = "";

        if (filtered.length === 0) {
            resultR.textContent = "No matching books.";
            listR.innerHTML = "";

        } else {
            resultR.textContent = "";
            let ul = document.createElement("ul");
            filtered.forEach(book => {
                let li = document.createElement("li");
                li.textContent = `${book.titre} written by ${book.author} in ${book.year}`;
                ul.appendChild(li);
            });
            listR.appendChild(ul);

        };
    } else {
        resultR.textContent = "No library matches!";
    };

});


