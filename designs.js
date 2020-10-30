// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()
const gridTable = document.getElementById("pixelCanvas");
const submitButton = document.getElementById("btn");


function makeGrid() {
    var inputHeight = document.getElementById("inputHeight").value;
    var inputWidth = document.getElementById("inputWidth").value;
    while (gridTable.childElementCount > 0){
        gridTable.removeChild(gridTable.firstChild)
    }
    for (let x = 1; x <= inputHeight; x++){
        var tableRow = document.createElement('tr');
        gridTable.appendChild(tableRow);        
        
        for (let z = 1; z <= inputWidth; z++){
            var tableColumn = document.createElement('td');
            tableRow.appendChild(tableColumn);
        }
    }
}

submitButton.addEventListener('click', function(e){
    e.preventDefault()
    makeGrid()
});

