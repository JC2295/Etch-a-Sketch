let gridContainer = document.querySelector("#gridContainer");

for(let i = 0; i < 16; i++){

    let gridRow = document.createElement("div");

    gridRow.classList.add("row");

    gridContainer.appendChild(gridRow);

    for(let j = 0; j < 16; j++){
        let gridCell = document.createElement("div");

        gridCell.classList.add("cell");

        gridRow.appendChild(gridCell);
    }

}
