
// Button to change itself
function buttonchange() {
    // Get the button element by its ID
    const button = document.getElementById("loginBtn");

    // Check if the button exists to avoid errors
    if (button) {
        // Check the current value of the button's text
        if (button.innerHTML == "Before click") {
            // If the text is "After click", change it back to "Original"
            button.innerHTML = "After click";
        } else {
            // Otherwise, change the text to "After click"
            button.innerHTML = "Before click";
        }
    }
}

// Get the button element by its ID
function buttontochangeOther() {
    const button = document.getElementById("loginBtn");

    // Check if the button exists to avoid errors
    if (button) {
        // Check the current value of the button's text
        if (button.innerHTML == "Before click") {
            // If the text is "After click", change it back to "Original"
            button.innerHTML = "After click";
        } else {
            // Otherwise, change the text to "After click"
            button.innerHTML = "Before click";
        }
    }
}


// Generalized function to change button text
function changeButtonText(currencyId) {
    const button = document.getElementById("currencybutton");
    const currencyButton = document.getElementById(currencyId);

    if (button && currencyButton) {
        const value = currencyButton.innerHTML;

        if (button.innerHTML) {
            button.innerHTML = value;
        } else {
            button.innerHTML;
        }
    }
}
