// List of User information 
const userList = [
    {
        name: "NAme1", 
        lastName: "LastNAme1",
        phoneNumber: "123456789",
        email: "carrot96@", 
        balance: {
            "AUD": 1000,
            "EUR": 1000,
            "GBP": 1000,
            "CHF": 1000,
        },
    },
    // {
    //     name: "User2", 
    //     lastName: "UserlastName2",
    //     phoneNumber: "123456789",
    //     email: "almonds52@",
    //     balance: {
    //         "AUD": 10,
    //         "EUR": 10,
    //         "GBP": 10,
    //     },
    // },
];

let testName=document.getElementById("username")
let testEmail=document.getElementById("userEmail")
let testpassword=document.getElementById("password")

function getUserInformation(nameFromInput,emailFromInput){
    let a=false;
    for (let user of Users){
        let nameToComapare= user.name;
        let emailToCompare= user.email;
        if ((nameFromInput==nameToComapare) && (emailFromInput==emailToCompare)) {
            return a=true;
            break;
        }
    }
    return a;
}

//console.log(getUserInformation(testName,testEmail))

function validateProfile() {
    let testName=document.getElementById("username")
    let testEmail=document.getElementById("userEmail")
    return getUserInformation(testName,testEmail)
}


// Function for Balance Cards 
function getBalance() {
    userList.forEach(user => {
        Object.entries(user.balance).forEach(([currency, amount]) => {
            generateBalance(currency, amount);
        });
    });
}

function generateBalance(currency, amount) {
    const template = document
        .getElementById("balance-template")
        .content.cloneNode(true);

    template.querySelector(".card-title").innerText = currency;
    template.querySelector(".card-text").innerText = amount;

    document.querySelector("#balance-list").appendChild(template);
}

// Call getBalance to populate the balances
getBalance();


// Function to change button text //HomePage
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

// Exchange 
function changeButtonTextTo(currencyId) {
    const button = document.getElementById("currencybuttonTo");
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

function changeButtonTextFrom(currencyId) {
    const button = document.getElementById("currencybuttonFrom");
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