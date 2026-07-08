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

    // TODO: Load the notes from the local storage.

    function loadNotes() {
        let notes = localStorage.getItem("notes");

        if (!notes) {
            notes = [];
        } else {
            notes = JSON.parse(notes);
        }
        return notes;
    }

    // TODO: Add new note to the saved notes in the local storage.
    let notes = displayNotes();
    if (!notes) {
        notes = [];
    } else {
        notes = JSON.parse(notes);
    }
    return notes;

    notes.push({ id, content, color: noteColor });
    localStorage.setItem("notes", JSON.stringify(notes));

};



// 3 When the form is submitted, get the value from the color input element from Step 2 and set this color to all notes (to get all notes, use the class name note). Remember to reset the color input element's value and store the color in the note color variable we created in Step 3.

colorForm.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevents the default event.

    const newColor = colorInput.value.trim();  // Removes whitespaces.

    const notes = document.querySelectorAll(".note");
    for (const note of notes) {
        note.style.backgroundColor = newColor;
    }

    colorInput.value = ""; // Clears the color input field after from submission.

    noteColor = newColor; // Updates the stored note color with the new selection.


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