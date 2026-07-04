// The script.js is included in the head of the index.html. To run your code after the DOM is loaded, wrap it with a callback function of an event listener (DOMContentLoaded)
document.addEventListener("DOMContentLoaded", function () {
    // Get the elements from the DOM that you will work on (box container, new box button, color form, color input
    const boxContainer = document.getElementById("box-container");
    const newBoxButton = document.getElementById("new-box-button");
    const colorForm = document.getElementById("color-form");
    const colorInput = document.getElementById("color-input");

    //Create variables to store the box color and counter for the box ID.
    let boxColor = null; // Stores the selected box color from the form.
    let boxIdCounter = 0; // Counter for assigning unique IDs to new boxes.

    // When the form is submitted, get the value from the color input element from Step 2 and set this color to all boxes (to get all boxes, use the class name box). Remember to reset the color input element's value and store the color in the box color variable we created in Step 3.
    

