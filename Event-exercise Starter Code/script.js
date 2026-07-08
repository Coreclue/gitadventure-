// The script.js is included in the head of the index.html. To run your code after the DOM is loaded, wrap it with a callback function of an event listener (DOMContentLoaded)
document.addEventListener("DOMContentLoaded", function () {

    // 1 Get the elements from the DOM that you will work on (note container, new note button, color form, color input
    const noteContainer = document.getElementById("note-container");
    const newNoteButton = document.getElementById("new-note-button");
    const colorForm = document.getElementById("color-form");
    const colorInput = document.getElementById("color-input");


    // 2 Create variables to store the note color and counter for the note ID.

    // TODO: Load the note color from the local storage.
    function storage() {
        let noteColor = localStorage.getItem("noteColor"); // Stores the selected note color from the form.
        let noteIdCounter = 0; // Counter for assigning unique IDs to new notes.
    }



    // TODO: Load the note ID counter from the local storage.
    function loadIDCounter() {
        noteIdCounter = parseInt(localStorage.getItem("noteIdCounter")) || 0;
    }

    loadIDCounter();

        boxColor = colorInput.value.trim();

        const boxes = document.getElementsByClassName("box");

        for (let box of boxes) {
            box.style.backgroundColor = boxColor; // Sets the box's background color using the last selected box color. 
        }

        colorInput.value = "";
    });


    /* 4 Create a function that adds a new box. In this function, set the box ID as content, the class name, and the background color from the box color variable we created in Step 3. Besides, set the box ID to a data attribute. You'll need this attribute to set the display text back to ID when the mouse leaves. Since we used this counter ID, increment it using the counter variable we created in Step 3 to keep its uniqueness. */

    function addNewBox() {
        const box = document.createElement("div");
        box.textContent = `Box ${boxIdCounter}`; // Sets the box ID as text.
        box.className = "box"; // Sets a CSS class.
        box.style.backgroundColor = boxColor; // Sets the box's background color using the last selected box color.
        box.setAttribute("data-box-id", boxIdCounter.toString()); // Stores the box ID to its data attribute.
        boxContainer.appendChild(box); // Appends it to the box container element as its child.

        boxIdCounter++; // Increments the counter since the ID is used for this box.
    }

    // 5 When the new box button is clicked, call the function that we created above that adds a new box.

    newBoxButton.addEventListener("click", function () {
        addNewBox();
    });

    // 6 To remove a box, listen to the double-click events in the document. If the event's target's class list contains the value box, remove the element.

    document.addEventListener("dblclick", function (event) {
        if (event.target.classList.contains("box")) {
            event.target.remove(); // Removes the clicked box.
        }
    });

    // 7 To display a box's page coordinates, listen to the mouse over events in the document. If the event's target's class list contains the value box, display the coordinates.

    document.addEventListener("mouseover", function (event) {
        if (event.target.classList.contains("box")) {
            event.target.textContent = `x: ${event.pageX}, y: ${event.pageY}`; // Temporarily change display text to show coordinates.
        }
    });

    // 8 To display a box's ID back when the mouse leaves after displaying the box's page coordinates, listen to the mouse out events in the document. If the event's target's class list contains the value box, get the ID from the box's data attributes and display it.

    document.addEventListener("mouseout", function (event) {

        if (event.target.classList.contains("box")) {

            event.target.textContent =
                event.target.dataset.boxId;

        }

    });

    // 9 To create a new box when the N key is pressed, listen to the key-down events in the document. If the key is N (check both upper and lower cases), call the function that adds a new box. Remember to ignore the event if it is triggered from the color input element.

    document.addEventListener("keydown", function (event) {
        if (event.key === "n" || event.key === "N") {
            addNewBox();
        }

        if (event.target === colorInput) {
            return; // Ignore the event if it is triggered from the color input element.
        }
    })


});