function executeSparqlQuery(query, callback) {
    var url = "https://query.wikidata.org/sparql";
    var queryUrl = url + "?query=" + encodeURIComponent(query) + "&format=json";

    fetch(queryUrl)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            callback(data);
        })
        .catch(function (error) {
            console.error("Error:", error);
        });
}

function showIronManInfo() {
    var sparqlQuery = `
        SELECT ?image ?givenName ?familyName ?pseudonym ?presentInWorkLabel
        WHERE {
            wd:Q23894967 wdt:P18 ?image ;
            OPTIONAL { wd:Q23894967 wdt:P742 ?pseudonym . }
            OPTIONAL { wd:Q23894967 wdt:P1441 ?presentInWork . }
            SERVICE wikibase:label { bd:serviceParam wikibase:language "[AUTO_LANGUAGE],en". }
        }
    `;

    executeSparqlQuery(sparqlQuery, function (data) {
        var characterInfoDiv = document.getElementById("characterContainer");

        if (data.results.bindings.length > 0) {
            var character = data.results.bindings[0];

            var image = character.image.value;
            var pseudonym = character.pseudonym ? character.pseudonym.value : "N/A";
            var presentInWork = character.presentInWorkLabel ? character.presentInWorkLabel.value : "N/A";

            var html = `
                <div class="card" id="ironManCard" >
                    <img src="${image}" alt="Imagen de Iron Man" class="character-image">
                    <h2>Nombre:</h2>
                    <p>Tony Stark</p>
                    <h2>Pseudónimo:</h2>
                    <p>${pseudonym}</p>
                    <h2>Presente en:</h2>
                    <p>${presentInWork}</p>
                </div>
            `;

            characterInfoDiv.innerHTML += html;
        } else {
            characterInfoDiv.innerHTML = "No se encontró información de Iron Man.";
        }
    });
}


function showBruceBannerInfo() {
    var sparqlQuery = `
        SELECT ?image ?givenName ?familyName ?pseudonym ?presentInWorkLabel
        WHERE {
            wd:Q24050117 wdt:P18 ?image ;
                      wdt:P735 ?givenName ;
                      wdt:P734 ?familyName .
            OPTIONAL { wd:Q24050117 wdt:P742 ?pseudonym . }
            OPTIONAL { wd:Q24050117 wdt:P1441 ?presentInWork . }
            SERVICE wikibase:label { bd:serviceParam wikibase:language "[AUTO_LANGUAGE],en". }
        }
    `;

    executeSparqlQuery(sparqlQuery, function (data) {
        var characterInfoDiv = document.getElementById("characterContainer");

        if (data.results.bindings.length > 0) {
            var character = data.results.bindings[0];

            var image = character.image.value;
            var pseudonym = character.pseudonym ? character.pseudonym.value : "N/A";
            var presentInWork = character.presentInWorkLabel ? character.presentInWorkLabel.value : "N/A";

            var html = `
                <div class="card">
                    <img src="${image}" alt="Imagen de Bruce Banner" class="character-image">
                    <h2>Nombre:</h2>
                    <p>Bruce Banner</p>
                    <h2>Pseudónimo:</h2>
                    <p>${pseudonym}</p>
                    <h2>Presente en:</h2>
                    <p>${presentInWork}</p>
                </div>
            `;

            characterInfoDiv.innerHTML += html;
        } else {
            characterInfoDiv.innerHTML = "No se encontró información de Bruce Banner.";
        }
    });
}

// ...

function showNatashaRomanoffInfo() {
    var sparqlQuery = `
        SELECT ?image ?pseudonym ?presentInWorkLabel
        WHERE {
            wd:Q23895063 wdt:P18 ?image ;
                      wdt:P735 ?givenName ;
                      wdt:P734 ?familyName .
            OPTIONAL { wd:Q23895063 wdt:P742 ?pseudonym . }
            OPTIONAL { wd:Q23895063 wdt:P1441 ?presentInWork . }
            SERVICE wikibase:label { bd:serviceParam wikibase:language "[AUTO_LANGUAGE],en". }
        }
    `;

    executeSparqlQuery(sparqlQuery, function (data) {
        var characterInfoDiv = document.getElementById("characterContainer");

        if (data.results.bindings.length > 0) {
            var character = data.results.bindings[0];

            var image = character.image.value;
            var pseudonym = character.pseudonym ? character.pseudonym.value : "N/A";
            var presentInWork = character.presentInWorkLabel ? character.presentInWorkLabel.value : "N/A";

            var html = `
                <div class="card">
                    <img src="${image}" alt="Imagen de Natasha Romanoff" class="character-image">
                    <h2>Nombre:</h2>
                    <p>Natasha Romanoff</p>
                    <h2>Pseudónimo:</h2>
                    <p>${pseudonym}</p>
                    <h2>Presente en:</h2>
                    <p>${presentInWork}</p>
                </div>
            `;

            characterInfoDiv.innerHTML += html;
        } else {
            characterInfoDiv.innerHTML = "No se encontró información de Natasha Romanoff.";
        }
    });
}

// ...

function showSteveRogersInfo() {
    var sparqlQuery = `
        SELECT ?image  ?pseudonym ?presentInWorkLabel
        WHERE {
            wd:Q24022098 wdt:P18 ?image ;
                      wdt:P735 ?givenName ;
                      wdt:P734 ?familyName .
            OPTIONAL { wd:Q24022098 wdt:P742 ?pseudonym . }
            OPTIONAL { wd:Q24022098 wdt:P1441 ?presentInWork . }
            SERVICE wikibase:label { bd:serviceParam wikibase:language "[AUTO_LANGUAGE],en". }
        }
    `;

    executeSparqlQuery(sparqlQuery, function (data) {
        var characterInfoDiv = document.getElementById("characterContainer");

        if (data.results.bindings.length > 0) {
            var character = data.results.bindings[0];

            var image = character.image.value;
            var pseudonym = character.pseudonym ? character.pseudonym.value : "N/A";
            var presentInWork = character.presentInWorkLabel ? character.presentInWorkLabel.value : "N/A";

            var html = `
                <div class="card">
                    <img src="${image}" alt="Imagen de Steve Rogers" class="character-image">
                    <h2>Nombre:</h2>
                    <p>Steven Rogers </p>
                    <h2>Pseudónimo:</h2>
                    <p>${pseudonym}</p>
                    <h2>Presente en:</h2>
                    <p>${presentInWork}</p>
                </div>
            `;

            characterInfoDiv.innerHTML += html;
        } else {
            characterInfoDiv.innerHTML = "No se encontró información de Steve Rogers.";
        }
    });
}


// ...

function showPeterParkerInfo() {
    var sparqlQuery = `
        SELECT ?image  ?pseudonym ?presentInWorkLabel
        WHERE {
            wd:Q23991129 wdt:P18 ?image ;
                     wdt:P735 ?givenName ;
                     wdt:P734 ?familyName .
            OPTIONAL { wd:Q23991129 wdt:P742 ?pseudonym . }
            OPTIONAL { wd:Q23991129 wdt:P1441 ?presentInWork . }
            SERVICE wikibase:label { bd:serviceParam wikibase:language "[AUTO_LANGUAGE],en". }
        }
    `;

    executeSparqlQuery(sparqlQuery, function (data) {
        var characterInfoDiv = document.getElementById("characterContainer");

        if (data.results.bindings.length > 0) {
            var character = data.results.bindings[0];

            var image = character.image.value;
            var pseudonym = character.pseudonym ? character.pseudonym.value : "N/A";
            var presentInWork = character.presentInWorkLabel ? character.presentInWorkLabel.value : "N/A";

            var html = `
                <div class="card">
                    <img src="${image}" alt="Imagen de Peter Parker" class="character-image">
                    <h2>Nombre:</h2>
                    <p>Peter Parker</p>
                    <h2>Pseudónimo:</h2>
                    <p>${pseudonym}</p>
                    <h2>Presente en:</h2>
                    <p>${presentInWork}</p>
                </div>
            `;

            characterInfoDiv.innerHTML += html;
        } else {
            characterInfoDiv.innerHTML = "No se encontró información de Peter Parker.";
        }
    });
}


function showThorInfo() {
    var sparqlQuery = `
        SELECT ?image ?givenName  ?presentInWorkLabel
        WHERE {
            wd:Q24046102 wdt:P18 ?image ;
                            wdt:P1477 ?givenName ;
            OPTIONAL { wd:Q24046102 wdt:P735 ?pseudonym . }
            OPTIONAL { wd:Q24046102 wdt:P1441 ?presentInWork . }
            SERVICE wikibase:label { bd:serviceParam wikibase:language "[AUTO_LANGUAGE],en". }
        }
    `;

    executeSparqlQuery(sparqlQuery, function (data) {
        var characterInfoDiv = document.getElementById("characterContainer");

        if (data.results.bindings.length > 0) {
            var character = data.results.bindings[0];

            var image = character.image.value;
            var givenName = character.givenName ? character.givenName.value : "N/A";
            var presentInWork = character.presentInWorkLabel ? character.presentInWorkLabel.value : "N/A";

            var html = `
                <div class="card"  >
                    <img src="${image}" alt="Imagen de Thor" class="character-image">
                    <h2>Nombre:</h2>
                    <p>${givenName} </p>
                    <h2>Pseudónimo:</h2>
                    <p>Thor</p>
                    <h2>Presente en:</h2>
                    <p>${presentInWork}</p>
                </div>
            `;

            characterInfoDiv.innerHTML += html;
        } else {
            characterInfoDiv.innerHTML = "No se encontró información de Thor.";
        }
    });
}



showIronManInfo();
showBruceBannerInfo();
showNatashaRomanoffInfo()
showSteveRogersInfo()
showThorInfo()
showPeterParkerInfo()


