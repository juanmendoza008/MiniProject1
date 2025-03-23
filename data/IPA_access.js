// ----------------- IPA to get bank transactions ------------------ 
axios
    .get("https://api.sampleapis.com/fakebank/accounts")
    .then((response) => {
        console.log("response", response);
        const allItems = response.data.reverse();
        // Number of items in HomePage LAst3 transactions
        const lastTransactions = allItems.slice(0, 3);
        lastTransactions.forEach((item) => addItemLastTransactions(item));
        // Number of items in Transactions List. 20 transactions
        const transactions = allItems.slice(0, 20);
        transactions.forEach((item) => addItemListTransactions(item));
});

// -------- Transactions Data information ---------
//   category : "Other Services"
//   credit : null
//   debit : 100.84
//   description  : "All Purpose Spray"
//   id : 1
//   transactionDate : "2015-12-31"

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


//Filter transactions by Name or category
