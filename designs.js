var gridTable = document.getElementById("pixelCanvas");
var submitButton = document.getElementById("btn");

// Function creates dynamic grid using input from user
function makeGrid() {
    var inputHeight = document.getElementById("inputHeight").value;
    var inputWidth = document.getElementById("inputWidth").value;

    while (gridTable.firstChild){
        gridTable.removeChild(gridTable.firstChild)
    }
    for (let x = 1; x <= inputHeight; x++){
        var tableRow = document.createElement('tr');
        gridTable.appendChild(tableRow);        
        
        for (let z = 1; z <= inputWidth; z++){
            var tableColumn = document.createElement('td');
            tableRow.appendChild(tableColumn);


//Fills in TD with chosen color????????
            tableColumn.addEventListener('click', function(){
                var chosenColor = document.getElementById("colorPicker");
                this.style.backgroundColor = chosenColor.value;
            })
        }
    }
}


submitButton.addEventListener('click', function(e){
    e.preventDefault()
    makeGrid()
});
