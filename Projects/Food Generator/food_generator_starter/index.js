// go to the spoonacular api, get random recipe //
// click a button ad display that recipe //
// the browser needs to display it //

const spoonacularAPIKEY = "e9b02e0a703d4b6ba227bb060d220eef1";

axios.get(
  `https://api.spoonacular.com/recipes/complexSearch?apiKey=${spoonacularAPIKEY}`,
);

const button = document.getElementById("generate-button");
const displayDiv = document.getElementById("display-div");

console.log(button);

button.addEventListener("click", function () {
  console.log("I got clicked");
  getRandomRecipe();
});

async function getRandomRecipe() {
  // create new Div
  let newDiv = document.createElement("div");
  let h3 = document.createElement("h3");

  try {

  const response = await axios.get(
    `https://api.spoonacular.com/recipes/random?apiKey=${spoonacularAPIKEY}`,
  );
  console.log(response);

  displayDiv.innerHTML = "";

  

  // set recipe title into the header
  h3.innerHTML = response.data.recipes[0].title;
  displayDiv.appendChild(h3);

  // set the summaryof the new div

  newDiv.innerHTML = response.data.recipes[0].summary;
  displayDiv.appendChild(newDiv);
} catch (error) {
  h3.innerHTML = "error"
  displayDiv.appendChild(h3);

  // show the error text from the API response

  newDiv.innerHTML = error.response.data.message;
  displayDiv.appendChild(newDiv);
}
}
