// IPA to get bank transactions 

//Get the data using Axios 
let transactions = []; // Declare transactions outside axios

axios
    .get("https://api.sampleapis.com/fakebank/accounts")
    .then((response) => {
        console.log("response with Axios", response);
        const allItems = response.data.reverse();
        // Number of items in Transactions List. 20 transactions
        transactions = allItems.slice(20, 40); // Assign to the global transactions variable
        transactions.forEach((item) => addItemListTransactions(item));
    });

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

    // Reset the templates
    document.querySelector("#transaction-list").innerHTML = "";
    // Show filter templates
    findArray.forEach(item => addItemListTransactions(item));
}



// //Array Test
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
//     }
// ]


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
//         document.querySelector("#transaction-list").appendChild(template);
//     } catch (error) {
//         console.error("Error adding item to transactions list:", error);
//     }
// }
  
// function filter() {
//       // Variables 
//       let input, filter;
//       input = document.getElementById("search");
//       filter = input.value.toLowerCase();
  
//       let findArray=arrayTest.filter((item) => 
//           item.category.toLocaleLowerCase().includes(filter) ||
//           item.description.toLocaleLowerCase().includes(filter)
//       );
  
//       //console.log("Find object",findArray)

//       document.querySelector("#transaction-list").innerHTML = "";
//       // Show filter templates
//       findArray.forEach(item => addItemListTransactions(item));
// }

// arrayTest.forEach(item => addItemListTransactions(item));



//Get the data using Fetch
// fetch("https://api.sampleapis.com/fakebank/accounts")
//     .then(res => res.json())
//     .then(data => {
//         console.log("Response with Fetch",data)
//         const allItems = data.reverse();
//         const listTransactions = allItems.slice(0, 12);
//         transactions = listTransactions.map(item => {
//             const template = document
//             .getElementById("transactions-template")
//             .content.cloneNode(true);
//             template.querySelector(".card-title").innerText = item.description;
//             template.querySelector(".category-item").innerText = item.category;
//             template.querySelector(".price-item").innerText = item.debit;
//             template.querySelector(".date-item").innerText = item.transactionDate;
//             document.querySelector("#transaction-list").appendChild(template);
//             return {description: item.description, category: item.category, debit: item.debit, 
//                 transactionDate: item.transactionDate, element: template}
//         });
//         console.log(transactions)
//     })
