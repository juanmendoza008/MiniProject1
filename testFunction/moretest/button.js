// /* When the user clicks on the button,
// toggle between hiding and showing the dropdown content */
// function myFunction() {
//     document.getElementById("myDropdown").classList.toggle("show");
//   }
  
//   function filterFunction() {
//     const input = document.getElementById("myInput");
//     const filter = input.value.toUpperCase();
//     const div = document.getElementById("myDropdown");
//     const a = div.getElementsByTagName("a");
//     for (let i = 0; i < a.length; i++) {
//       txtValue = a[i].textContent || a[i].innerText;
//       if (txtValue.toUpperCase().indexOf(filter) > -1) {
//         a[i].style.display = "";
//       } else {
//         a[i].style.display = "none";
//       }
//     }
// }

function dropdownchange() {
    // Get the button element by its ID
    const button = document.getElementById("dropbtn");

    // Check if the button exists to avoid errors
    if (button) {
        // Check the current value of the button's text
        if (button.innerHTML == "Dropdown") {
            // If the text is "After click", change it back to "Original"
            button.innerHTML = "After click";
        } else {
            // Otherwise, change the text to "After click"
            button.innerHTML = "Before click";
        }
    }
}

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
