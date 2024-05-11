let root = document.documentElement;

let gridSizeInput = document.querySelector("#gridSizeInput");

let gridSizeValue = gridSizeInput.value;

gridSizeInput.addEventListener("change", updateGridSize);

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

            gridCell.addEventListener("mousedown", shade);

            gridCell.addEventListener("mouseover", shade)
        }

    }


    function shade(){
        this.classList.add("shade");
    }

    function  unshade(){
        this.classList.remove("shade");
    }

};