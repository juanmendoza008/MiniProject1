
//IPA to get exchange rates // current compare Btc 
axios
  .get("https://api.coingecko.com/api/v3/exchange_rates")
  .then((response) => {
    console.log("response", response);
    const currency = response.data;
    //response.data.forEach((item) => addItem(item));

    // let value1= currency.array.forEach(element => { 
    //     if 
        
    // });

  });

// Exchange rates data
//   aud: {name: "Australian Dollar", unit: "A$", value: 130079.166, type: "fiat"}
//   name : "Australian Dollar"
//   type : "fiat"
//   unit : "A$"
//   value : 130079.166





// IPA to get user information but don't work to the purpose 
// axios
//   .get('https://fakestoreapi.com/users/1')
//   .then(response => {
//     console.log("responseUSer",response.data);
//     response.address.forEach((item) => addItem(item));
//   });

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