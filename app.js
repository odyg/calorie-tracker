// Define a constructor function for Food objects
function Food(name, servingSize, calorie, calorieConsumed) {
  this.name = name;
  this.servingSize = servingSize;
  this.calorie = calorie;
  this.calorieConsumed = calorieConsumed; // Stores calculated calorie consumption
}

// Array to store food objects
let food = [];

// Variable to track total calorie consumption
let totalCalorieConsumed = 0;

// Function to add a new food entry
function foodInput() {
  // Get input values from the HTML form
  let name = document.getElementById("name").value;
  let servingSize = parseFloat(document.getElementById("servingSize").value);
  let calorie = parseFloat(document.getElementById("calorie").value);

  // Calculate calorie consumption for this entry
  let calorieConsumed = calorie * servingSize;

  // Create a new Food object and add it to the food array
  let newObj = new Food(name, servingSize, calorie, calorieConsumed);
  food.push(newObj);

  // Update the total calorie consumption
  totalCalorieConsumed += calorieConsumed;

  // Clear input fields
  clearInputs();
}

// Function to display food details
function foodDisplay(newObj) {
  const foodInfoDiv = document.getElementById("foodInfo");

  // Create a string containing the food information
  let foodInfoHTML = "Food name is: " + newObj.name + "<br />";
  foodInfoHTML += "Serving size is: " + newObj.servingSize + "<br />";
  foodInfoHTML += "Calorie per serving: " + newObj.calorie + "<br />";
  foodInfoHTML +=
    "Calorie consumed: " + newObj.calorieConsumed + "<br /><br />";

  // Display the food information in the HTML
  foodInfoDiv.innerHTML += foodInfoHTML;
}

// Function to display all food details and total calorie consumption
function foodDetail() {
  // Iterate through the food array and display each entry
  food.forEach((element) => {
    foodDisplay(element);
  });

  // Display the total calorie consumption
  const totalCal = document.getElementById("totalcalorie");
  totalCal.innerHTML = "Total Calories for today: " + totalCalorieConsumed;
}

// Function to clear input fields
function clearInputs() {
  let inputs = document.querySelectorAll('input[type="text"]');
  inputs.forEach(function (input) {
    input.value = "";
  });
}
