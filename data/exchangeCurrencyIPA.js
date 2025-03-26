
//IPA to get exchange rates // current compare Btc 
axios
  .get("https://api.coingecko.com/api/v3/exchange_rates")
  .then((response) => {
    console.log("response", response);
    const currency = response.data;
    //currency.forEach((current) => lookFor(current));

  });

// Exchange rates data
//   aud: {name: "Australian Dollar", unit: "A$", value: 130079.166, type: "fiat"}
//   name : "Australian Dollar"
//   type : "fiat"
//   unit : "A$"
//   value : 130079.166

//let currencyIDTo = document.getElementById("currencybuttonTo").toLowerCase();
//let currencyIDFrom = document.getElementById("currencybuttonFrom").toLowerCase();
let currencyIDTo = "AUD"
let currencyIDFrom = "GBP"

list=[
  aud = {name:"AUD",value:1.11},
  eur = {name:"EUR",value:1.86},
  gbp = {name:"EUR",value:2.1}

]


// function lookFor(list) {
//   if(currencyIDTo && currencyIDFrom) {
//     list.find((currencyIDTo.toLowerCase() == list[i]) => {
//       list.value
//     })
//     currencyIDTo.toLowerCase() ==
//     current.value;

//   }
  

// }

