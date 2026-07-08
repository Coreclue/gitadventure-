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


    // TODO: Update the note color in the local storage.

    localStorage.setItem("noteColor", noteColor); // Saves the selected note color to the local storage.

});



/* 4 Create a function that adds a new note. In this function, set the note ID as content, the class name, and the background color from the note color variable we created in Step 3. Besides, set the note ID to a data attribute. You'll need this attribute to set the display text back to ID when the mouse leaves. Since we used this counter ID, increment it using the counter variable we created in Step 3 to keep its uniqueness. */

function addNewNote() {
    const note = document.createElement("textarea");
    note.value = `note ${noteIdCounter}`; // Sets the note ID as text.
    note.className = "note"; // Sets a CSS class.
    note.style.backgroundColor = noteColor; // Sets the note's background color using the last selected note color.
    note.setAttribute("data-note-id", noteIdCounter.toString()); // Stores the note ID to its data attribute.
    noteContainer.appendChild(note); // Appends it to the note container element as its child.

    noteIdCounter++; // Increments the counter since the ID is used for this note.

}




// 5 When the new note button is clicked, call the function that we created above that adds a new note.

newNoteButton.addEventListener("click", function () {
    addnewNote();
});

// 6 To remove a note, listen to the double-click events in the document. If the event's target's class list contains the value note, remove the element.

document.addEventListener("dblclick", function (event) {
    if (event.target.classList.contains("note")) {
        event.target.remove(); // Removes the clicked note.

        // TODO: Delete the note from the saved notes in the local storage.
        const noteId = event.target.dataset.noteId;
        let notes = displayNotes();
        // removes matching notes
        notes = notes.filter(note => note.id.toString() !== noteId);
        localStorage.setItem("notes", JSON.stringify(notes));
    }
});


noteContainer.addEventListener("blur", function (event) {
    if (event.target.classList.contains("note")) {
        // TODO: Update the note from the saved notes in the local storage.

        const noteId = event.target.dataset.noteId;
        const noteContent = event.target.value;
        const notes = displayNotes();



    }
}, true);



// 9 To create a new note when the N key is pressed, listen to the key-down events in the document. If the key is N (check both upper and lower cases), call the function that adds a new note. Remember to ignore the event if it is triggered from the color input element.

window.addEventListener("keydown", function (event) {
    /* Ignores key presses made for color and note content inputs. */

    if (event.target.id === "color-input" || event.target.type === "textarea") {
        return; // Ignore the event if it is triggered from the color input element or note content input.
    }

    /* Adds a new note when the "n" key is pressed. */

    if (event.key === "n" || event.key === "N") {
        addNewNote(); // Adds a new note.
    }
});