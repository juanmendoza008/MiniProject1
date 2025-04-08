// ----------------- IPA to get bank transactions ------------------ 

// -------- Transactions Data information ---------
//   category : "Other Services"
//   credit : null
//   debit : 100.84
//   description  : "All Purpose Spray"
//   id : 1
//   transactionDate : "2015-12-31"



let transactions = [];

axios
    .get("https://api.sampleapis.com/fakebank/accounts")
    .then((response) => {
        console.log("response", response);
        allItems = response.data.reverse();
        // Number of items in HomePage LAst8 transactions
        lastTransactions = allItems.slice(20, 28);
        //console.log("lastTransactions",lastTransactions)
        lastTransactions.forEach((item) => addItemLastTransactions(item));
        // Number of items in Transactions List. 20 transactions
        transactions = allItems.slice(20, 40);
        //console.log("Transactions",transactions)
        transactions.forEach((item) => addItemListTransactions(item));
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



// Function in Transactions List transactions
function addItemListTransactions(item) {
    try {
        const template = document
            .getElementById("transactions-list-template")
            .content.cloneNode(true);
        template.querySelector(".card-title").innerText = item.description;
        template.querySelector(".category-item").innerText = item.category;
        template.querySelector(".price-item").innerText = item.debit;
        template.querySelector(".date-item").innerText = item.transactionDate;
        document.querySelector("#transaction-list").appendChild(template);
    } catch (error) {
        console.error("Error adding item to transactions list:", error);
    }
}

function filterByNameDescription() {
    // Variables 
    let input, filter;
    input = document.getElementById("search");
    filter = input.value.toLowerCase();

    let findArray = transactions.filter((item) =>
        item.category.toLowerCase().includes(filter) ||
        item.description.toLowerCase().includes(filter)
    );
    //console.log("Find Object",findArray)
    // Reset the templates
    document.querySelector("#transaction-list").innerHTML = "";
    // Show filter templates
    findArray.forEach(item => addItemListTransactions(item));
}
