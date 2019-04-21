let pageNumber = 1;
let residentLinks = {};


doFetch();

document.getElementById("backButton").addEventListener("click", backButton);
document.getElementById("nextButton").addEventListener("click", nextButton);

function doFetch() {
    fetch('https://swapi.co/api/planets/?page='+ pageNumber)  // set the path; the method is GET by default, but can be modified with a second parameter
    .then((response) => response.json())  // parse JSON format into JS object
    .then((data) => {
        const tableData = document.querySelector("tbody");
        //TODO: Make it a shiny table
        data.results.forEach((row, id_number) => {
            const tr = document.createElement("tr");
            const keys = getPlanetKeys();
            residentLinks["name"] = row[keys["residents"]]; // this is how i will able to connect to the residents
            for(let i = 0; i < keys.length; i++){
                const td = document.createElement("td");


                if(keys[i] != "residents" ){
                    td.textContent = row[keys[i]];
                }

                else{
                    let btn = document.createElement("button" );
                    btn.innerText = "3" + " resident(s)";
                    btn.id = "resident_button" + id_number;
                    btn.setAttribute('data-toggle','modal');
                    btn.setAttribute('data-target','#resident');
                    btn.setAttribute('data-name',row["name"]);
                    btn.addEventListener("click", ()=>{
                        document.getElementById("resident_modal_header").innerText = "Residents of " + row["name"];
                        let tableContent = document.getElementById("resident_modal_text").querySelector("tbody");
                        clearTables(tableContent);
                        fetch(row["residents"][0])
                            .then((responseI) => responseI.json())  // parse JSON format into JS object
                            .then((dataI) => {
                                const trI = document.createElement("tr");
                                let resiKeys = getResidentKeys();
                                for(let x = 0; x < resiKeys.length; x++){
                                    const tdI = document.createElement("td");
                                    tdI.textContent = dataI[resiKeys[x]];
                                    trI.appendChild(tdI);
                                }
                                tableContent.appendChild(trI);



                            });
                    });



                    td.appendChild(btn);
                }
                tr.appendChild(td);
            }
            tableData.appendChild(tr);
        });
    });
}

const tableData1 = document.querySelector("tbody");
function clearTables(tableData) {

    while (tableData.firstChild){
        tableData.removeChild(tableData.firstChild);
    }
}

function getPlanetKeys() {
    return ["name","diameter","climate","terrain","surface_water","population","residents"]
}
function getResidentKeys() {
    return ["name","height","mass","hair_color","skin_color","eye_color","birth_year", "gender"]
}


//clearTables();

// function for eventListener
function buttonPress(number) {
    pageNumber += number;
    clearTables(tableData1);
    doFetch();



}

function backButton() {
    if(pageNumber > 1){
        buttonPress(-1);
    }
}

function nextButton() {

    if (pageNumber < 7) {
        buttonPress(1);
    }
}

function isNext() {

}

function isPrev() {

}
