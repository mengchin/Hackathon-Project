const recipes= [
    "Vegetable Stir-Fry", 
    "Fresh Garden Salad", 
    "Roasted Root Vegetables",
    "Grilled Salmon", "Fish Tacos", "Seafood Paella",
    "Sourdough Bread", "Chocolate Croissants", "Apple Pie"
]

const recipe_dropdown = document.getElementById('recipeDropdown');

//Loop through the array of names
recipes.forEach(recipe => {
    // Create a new <option> element
    let option = document.createElement('option');
    // Set the value attribute
    option.value = recipe;
    // Set the text inside the option
    option.textContent = recipe;
    // Add the <option> to the dropdown
    recipe_dropdown.appendChild(option);
});
