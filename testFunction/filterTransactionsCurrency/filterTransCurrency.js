
// Buttons 
// Generalized function to change button text
function changeButtonText(currencyId) {
    const button = document.getElementById("currencybutton");
    const currencyButton = document.getElementById(currencyId);

    if (button && currencyButton) {
        const value = currencyButton.innerHTML;
        console.log(value)

        if (button.innerHTML) {
            button.innerHTML = value;
        } else {
            button.innerHTML;
        }
    }
}


let lastTransactions = [];

axios
    .get("https://api.sampleapis.com/fakebank/accounts")
    .then((response) => {
        console.log("response", response);
        allItems = response.data.reverse();
        // Number of items in HomePage LAst8 transactions
        lastTransactions = allItems.slice(20, 28);
        console.log("lastTransactions",lastTransactions)
        lastTransactions.forEach((item) => addItemLastTransactions(item));
        
});

// Function in Homepage Last transactions
function addItemLastTransactions(item) {
    try {
        const template = document
            .getElementById("transactions-short-template")
            .content.cloneNode(true);
        template.querySelector(".card-title").innerText = item.description;
        template.querySelector(".category-item").innerText = item.category;
        template.querySelector(".price-item").innerText = item.debit;
        template.querySelector(".date-item").innerText = item.transactionDate;
        document.querySelector("#transaction-short-list").appendChild(template);
    } catch (error) {
        console.error("Error adding item to last transactions:", error);
    }
}

function filterByCurrency(currencyId) {
    // Variables 
    const button = document.getElementById("currencybutton");
    const currencyButton = document.getElementById(currencyId);
    if (!currencyButton) {
        console.error(`Element with id "${currencyId}" not found.`);
        return;
    }
    const value = currencyButton.innerHTML;

    let number1 , number2;

    switch (value) {
        case "AUD":
            number1 =+ 0;
            break;
        case "EUR":
            number1 =+ 2;
            break;
        case "GBP":
            number1 =+ 4;
            break;
        case "CHF":
            number1 =+ 6;
            break;
    }
    number2=number1+2;
    console.log("number1: ",number1,"; number2: ",number2)

    findArray=lastTransactions.slice(number1,number2)

    // Reset the templates
    document.querySelector("#transaction-short-list").innerHTML = "";
    // Show filter templates
    findArray.forEach(item => addItemLastTransactions(item));
}


// Array 8 elements
// let arrayTest = [
//     {
//         category: "Dining",
//         credit: null,
//         debit: 12.17,
//         description: "Mom's Pecan Clusters",
//         id: 101,
//         transactionDate: "2016-09-15",
//     },
//     {
//         category: "Dining",
//         credit: null,
//         debit: 7.15,
//         description: "Bachelor Chow",
//         id: 100,
//         transactionDate: "2016-09-15",
//     },
//     {
//         category: "Payment/Credit",
//         credit: 197.38,
//         debit: null,
//         description: "MomCorp",
//         id: 99,
//         transactionDate: "2016-09-14",

//     },
//     {
//         category: "Fee/Interest Charge",
//         credit: null,
//         debit: 5,
//         description: "MomCorp",
//         id: 98,
//         transactionDate: "2016-09-13",
//     },
// ];
// arrayTest.push(
//     {
//         category: "Groceries",
//         credit: null,
//         debit: 45.67,
//         description: "SuperMart",
//         id: 97,
//         transactionDate: "2016-09-12",
//     },
//     {
//         category: "Entertainment",
//         credit: null,
//         debit: 15.00,
//         description: "Movie Night",
//         id: 96,
//         transactionDate: "2016-09-11",
//     },
//     {
//         category: "Utilities",
//         credit: null,
//         debit: 120.50,
//         description: "Electric Bill",
//         id: 95,
//         transactionDate: "2016-09-10",
//     },
//     {
//         category: "Travel",
//         credit: null,
//         debit: 300.00,
//         description: "Airline Ticket",
//         id: 94,
//         transactionDate: "2016-09-09",
//     }
// );

// // Function in Transactions List transactions
// function addItemListTransactions(item) {
//     try {
//         const template = document
//             .getElementById("transactions-list-template")
//             .content.cloneNode(true);
//         template.querySelector(".card-title").innerText = item.description;
//         template.querySelector(".category-item").innerText = item.category;
//         template.querySelector(".price-item").innerText = item.debit;
//         template.querySelector(".date-item").innerText = item.transactionDate;
//         document.querySelector("#transaction-short-list").appendChild(template);
//     } catch (error) {
//         console.error("Error adding item to transactions list:", error);
//     }
// }

// arrayTest.forEach(item => addItemListTransactions(item));

// function filterByCurrency(currencyId) {
//     // Variables 
//     const button = document.getElementById("currencybutton");
//     const currencyButton = document.getElementById(currencyId);
//     if (!currencyButton) {
//         console.error(`Element with id "${currencyId}" not found.`);
//         return;
//     }
//     const value = currencyButton.innerHTML;

//     let number1,number2;

//     switch (value) {
//         case "AUD":
//             number1=0;
//             break;
//         case "EUR":
//             number1=2;
//             break;
//         case "GBP":
//             number1=4;
//             break;
//         case "CHF":
//             number1=6;
//             break;
//     }
//     number2=number1+2;
//     console.log("number1: ",number1,"; number2: ",number2)

//     findArray=arrayTest.slice(number1,number2)

//     // Reset the templates
//     document.querySelector("#transaction-short-list").innerHTML = "";
//     // Show filter templates
//     findArray.forEach(item => addItemListTransactions(item));
// }


// IPA to get bank transactions 
