// initialize width variable to 16
let width = 16;

// Store reference for grid container in variable
const gridContainer = document.querySelector("#grid-container");

// Generate Initial Grid of 16 x 16
generateGrid(width)

// Collect user input for grid dimensions
const widthButton = document.querySelector("#width-button");
widthButton.addEventListener("click", () => {
    // Get user input via prompt
    let widthInput = prompt("Enter Grid Width (Max 100):").trim();

    // Check user input is valid (int 1-100)
    if (!widthInput) {
        alert("Invalid Input! Must be integer between 1-100")
    }
    else {
        widthInput = parseInt(widthInput, 10);
        if (isNaN(widthInput) || widthInput < 1 || widthInput > 100) {
            alert("Invalid Input! Must be integer between 1-100")
        }
        else {
            width = widthInput;
        }
    }

    // Generate new grid
    generateGrid(width)
});


// Create Hover effect - when mouse is over a given div, bg color: red
gridContainer.addEventListener("mousemove", event => {
    // Check if hovered element is of desired class
    if (event.target.classList.contains("grid-div")) {
        // If so, change background color to red
        event.target.style.backgroundColor = "red";
    }
} )


function generateGrid(width) {
    // Clear out previous grid if applicable
    gridContainer.innerHTML = "";

    // Caclulate grid width % to be applied
    const cellWidth = (100 / width) + "%"

    // Iterate across columns
    for (let column = 0; column < width; column++) {
        // Iterate down rows
        for (let row = 0; row < width; row++) {
            // Create new div
            const newDiv = document.createElement("div");

            // Add width style attribute to div
            // aspect ratio is set to 1 / 1 in styles so will adjust height also
            newDiv.style.width = cellWidth;

            // Add grid class to div
            newDiv.classList.add("grid-div");

            // Append new div to parent container
            gridContainer.appendChild(newDiv);
        }
    }
}