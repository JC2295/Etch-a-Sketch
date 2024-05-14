let root = document.documentElement;

let gridSizeInput = document.querySelector("#gridSizeInput");

let gridSizeValue = gridSizeInput.value;

gridSizeInput.addEventListener("change", updateGridSize);

updateGridSize();

function updateGridSize(){

    gridSizeValue = gridSizeInput.value;

    document.querySelector("GridContainer")

    let gridContainer = document.querySelector("#gridContainer").innerHTML = "";

    createGrid();

}

function createGrid(){

    for(let i = 0; i < gridSizeValue; i++){

        let gridRow = document.createElement("div");

        gridRow.classList.add("row");

        gridContainer.appendChild(gridRow);

        for(let j = 0; j < gridSizeValue; j++){
            let gridCell = document.createElement("div");

            gridCell.classList.add("cell");

            gridRow.appendChild(gridCell);

            gridCell.addEventListener("mouseover", function(e){
                if(e.buttons == 1 || e.buttons == 3){
                    this.classList.add("shade");
                }
            });
        }

    }
};