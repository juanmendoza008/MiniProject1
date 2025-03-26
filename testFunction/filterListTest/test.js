let transactions=[] ; 

// IPA to get bank transactions 

fetch("https://api.sampleapis.com/fakebank/accounts")
    .then(res => res.json())
    .then(data => {
        const allItems = data.reverse();
        const listTransactions = allItems.slice(0, 12);
        transactions = listTransactions.map(item => {
            const template = document
            .getElementById("transactions-template")
            .content.cloneNode(true);
            template.querySelector(".card-title").innerText = item.description;
            template.querySelector(".category-item").innerText = item.category;
            template.querySelector(".price-item").innerText = item.debit;
            template.querySelector(".date-item").innerText = item.transactionDate;
            document.querySelector("#transaction-list").appendChild(template);
            return {description: item.description, category: item.category, debit: item.debit, transactionDate: item.transactionDate, element: template}

        });
        console.log(transactions)
    })

const searchInput = document.querySelector("[data-search]")
searchInput.addEventListener("input", e => {
    const value = e.target.value.toLowerCase();
    transactions.forEach(transaction => {
        if (transaction.element) {
            const isVisible = transaction.description.toLowerCase().includes(value) || transaction.category.toLowerCase().includes(value);
            transaction.element.classList.toggle("hide", !isVisible);
        }
    });
})
    
// axios
//     .get("https://api.sampleapis.com/fakebank/accounts")
//     .then((response) => {
//         console.log("response", response);
//         const allItems = response.data.reverse();
//         // Number of items in HomePage LAst transactions
//         // const lastTransactions = allItems.slice(0, 3);
//         // lastTransactions.forEach((item) => addItemLastTransactions(item));
//         // Number of items in Transactions List. 20 transactions
//         const transactions = allItems.slice(0, 20);
//         transactions.forEach((item) => addItemListTransactions(item));
// });

// -------- Transactions Data information ---------
//   category : "Other Services"
//   credit : null
//   debit : 100.84
//   description  : "All Purpose Spray"
//   id : 1
//   transactionDate : "2015-12-31"

// Function in Homepage Last transactions
// function addItemLastTransactions(item) {
        
//         const template = document
//             .getElementById("transactions-template")
//             .content.cloneNode(true);
//         template.querySelector(".card-title").innerText = item.description;
//         template.querySelector(".category-item").innerText = item.category;
//         template.querySelector(".price-item").innerText = item.debit;
//         template.querySelector(".date-item").innerText = item.transactionDate;
//         document.querySelector("#transaction-short-list").appendChild(template);
// }



// Function in Transactions List transactions
// function addItemListTransactions(item) {
        
//         const template = document
//             .getElementById("transactions-template")
//             .content.cloneNode(true);
//         template.querySelector(".card-title").innerText = item.description;
//         template.querySelector(".category-item").innerText = item.category;
//         template.querySelector(".price-item").innerText = item.debit;
//         template.querySelector(".date-item").innerText = item.transactionDate;
//         document.querySelector("#transaction-list").appendChild(template);
// }



//Filter transactions by Name or category
function filterTransactions() {
    const userInput = document.getElementById("search-box");
    const searchTerm = userInput.value.toLowerCase();

    const mattchedTransactions = transactions.filter(() => {
        return transactions.description.toLowerCase().includes(searchTerm) || transactions.category.toLowerCase().includes(searchTerm);
    });
    console.log("mattchedTransactions", mattchedTransactions);
}


function searchProducts() {
    const userInput = document.getElementById("search-box");
    const searchTerm = userInput.value.toLowerCase();

    console.log("search", searchTerm);
    const matchedProducts = products.filter((prod) =>
      prod.name.toLowerCase().includes(searchTerm)
    );

    console.log("matchedProducts", matchedProducts);
  }


function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}
  
function filterFunction() {
    const input = document.getElementById("myInput");
    const filter = input.value.toUpperCase();
    const div = document.getElementById("myDropdown");
    const a = div.getElementsByTagName("a");
    for (let i = 0; i < a.length; i++) {
      txtValue = a[i].textContent || a[i].innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        a[i].style.display = "";
      } else {
        a[i].style.display = "none";
      }
    }
  }