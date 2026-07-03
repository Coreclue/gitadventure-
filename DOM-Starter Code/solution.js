// Use 'innerText' to change this content
const task1 = document.getElementById("task1");
task1.innerText = "Changed using 'innerText'.";

// Use 'innerHTML' to add a submit button here
const task2 = document.getElementById("task2");
task2.innerHTML = "<button>Submit</button>";

// Change the background color of this page to '#232323'
const task3 = document.body;
task3.style.backgroundColor = "#232323";

// Make all the elements that have class 'item' have a border
const task4 = document.querySelectorAll(".item");
task4.forEach(item => {
  item.style.border = "2px solid black";
});

// Change the href attribute of this link to 'https://www.springboard.com/'
const task5 = document.getElementById("task5");
task5.href = "https://www.springboard.com/";

// Change the value to 'DOM Master
const task6 = document.getElementById("task6");
task6.value = "DOM Master";

// Use classList to add 'new-class' to this element
const task7 = document.getElementById("task7");
task7.classList.add("new-class");

// Append a new button under this element
const task8 = document.getElementById("task8");
const newButton = document.createElement("button");
newButton.innerText = "New Button";
task8.appendChild(newButton);

// Remove this element
const task9 = document.getElementById("task9");
task9.remove();
