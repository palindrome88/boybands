    let bands = ["Boyz II Men", "NSync", "New Kids on the Block", "98 Degrees", "One Direction"];
    let vegetables = ["Carrots", "Kale", "Zucchini", "Broccoli", "Squash"];

// Get a reference to the appropriate DOM element for bands
    const bandElement = document.getElementById("div");

// Get a reference to the appropriate DOM element for vegetables
    const veggieElement = document.getElementsByClassName("vegetables")

// Execute a for loop that will iterate over the arrays
    for (let loopTracker = 0; loopTracker < 5; loopTracker += 1) {
    
  // Get a reference to the current item in the bands array
    const currentBand = bands[i];

  // Update the innerHTML value of the DOM element for bands
    document.getElementById("div").innerHTML = currentBand;

  // Get a reference to the current item in the vegetables array
    const currentVeggie = vegetables[i];

  // Update the innerHTML value of the DOM element for vegetables
    document.getElementsByClassName("vegetables").innerHTML = vegetables[i];
}
