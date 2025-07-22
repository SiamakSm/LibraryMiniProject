

let livres = [];


document.getElementById("show").addEventListener("click", function () {
    let recup = localStorage.getItem("livres");
    if (recup) {
        livres = JSON.parse(recup);
        if (livres.length === 0) {
            document.getElementById("list").textContent = "No books found.";
        } else {

            let ul = document.createElement("ul");
            livres.forEach(function (livre) {
                let li = document.createElement("li");
                li.textContent = `${livre.titre} written by ${livre.author} in ${livre.year}`;
                ul.appendChild(li);
            });
            document.getElementById("list").innerHTML = "";
            document.getElementById("list").appendChild(ul);
        };

    } else {
        document.getElementById("list").innerHTML = "";
        document.getElementById("list").innerHTML = `No library on ° livres ° found ! <br> Please add one !`;
    };

});



document.getElementById("add").addEventListener("click", function () {
    let titre = document.getElementById("title").value.trim();
    let author = document.getElementById("author").value.trim();
    let year = document.getElementById("year").value.trim();
    if (titre && author && year) {
        let recup = localStorage.getItem("livres");
        if (recup) {
            livres = JSON.parse(recup);
            livres.push({ titre: titre, author: author, year: year });
            localStorage.setItem("livres", JSON.stringify(livres));
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



document.getElementById("find").addEventListener("click", function () {
    let search = document.getElementById("search").value.trim();
    let found = false;
    if (search) {

        let recup = localStorage.getItem("livres");
        if (recup) {

            livres = JSON.parse(recup);
            if (livres.length === 0) {

                document.getElementById("result").textContent = "Empty library.";
            } else {

                for (let livre in livres) {
                    if (livres[livre]["titre"] == search) {
                        document.getElementById("result").textContent = `${livres[livre]["titre"]} written by ${livres[livre]["author"]} in ${livres[livre]["year"]}`;
                        found = true;
                        break;
                    };
                };
                if (!found) {
                    document.getElementById("result").textContent = "Book not found.";
                }
            };
        } else {
            document.getElementById("result").textContent = "No library found.";
        };

    } else {
        alert("Please enter the title !");
    };

});






document.getElementById("searchR").addEventListener("input", function () {

    let query = document.getElementById("searchR").value.trim().toLowerCase();
    let recup = localStorage.getItem("livres");
    if (query === "") {
        document.getElementById("listR").innerHTML = "";
        document.getElementById("resultR").textContent = "";
        return;
    };
    if (recup) {
        livres = JSON.parse(recup);
        let filtered = livres.filter(book => book.titre.toLowerCase().includes(query));
        document.getElementById("listR").innerHTML = "";

        if (filtered.length === 0) {
            document.getElementById("resultR").textContent = "No matching books.";
            document.getElementById("listR").innerHTML = "";

        } else {
            document.getElementById("resultR").textContent = "";
            let ul = document.createElement("ul");
            filtered.forEach(book => {
                let li = document.createElement("li");
                li.textContent = `${book.titre} written by ${book.author} in ${book.year}`;
                ul.appendChild(li);
            });
            document.getElementById("listR").appendChild(ul);

        };
    } else {
        document.getElementById("resultR").textContent = "No library matches!";
    };

});


