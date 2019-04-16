


fetch('https://swapi.co/api/planets/?page='+'4')  // set the path; the method is GET by default, but can be modified with a second parameter
.then((response) => response.json())  // parse JSON format into JS object
.then((data) => {
    const tableData = document.querySelector("tbody");
    //TODO: Make it a shiny table
    data.results.forEach((row) => {
        const tr = document.createElement("tr");
        const keys = getKeys();
        for(let i = 0; i < keys.length; i++){
            const td = document.createElement("td");
            td.textContent = row[keys[i]];
            tr.appendChild(td);
        }
        tableData.appendChild(tr);
    });

});


function clearTables() {
    const tableData = document.querySelector("tbody");
    while (tableData.firstChild){
        tableData.removeChild(tableData.firstChild);
    }

}

function getKeys() {
    return ["name","diameter","climate","terrain","surface_water","population","residents"]
}

//clearTables();