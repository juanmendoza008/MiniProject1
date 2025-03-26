
// let allUsers = [];
// console.log(allUsers)
// let a=0;


// // //In the list 
// // let testName="Moriah.Stanton"
// // let testEmail="Rey.Padberg@karina.biz"
// //Not in the list
// let testName="Diego"
// let testEmail="caquin@hotmail.com"


// // Users List
// axios
//     .get("https://jsonplaceholder.typicode.com/users")
//     .then((response) => {
//         //console.log("response", response);
//         allUsers = response.data;
//         console.log(allUsers);
//         console.log(getUserInformation(testName, testEmail));
//     })
//     .catch((error) => {
//         console.error("Error fetching users:", error);
//     });

// // Function to get user information from allUsers
// function getUserInformation(nameFromInput, emailFromInput) {
//     for (let user of allUsers) {
//         if ((user.username.toLowerCase() == nameFromInput.toLowerCase()) 
//             && (user.email.toLowerCase() == emailFromInput.toLowerCase())) {
//             return a=1;
//         }
//     }
//     return a;
// }

// // User Information from IPA
// // address: {street: 'Kulas Light', suite: 'Apt. 556', city: 'Gwenborough', zipcode: '92998-3874', geo: {…}}
// // company: {name: 'Romaguera-Crona', catchPhrase: 'Multi-layered client-server neural-net', bs: 'harness real-time e-markets'}
// // email: "Sincere@april.biz"
// // id : 1
// // name : "Leanne Graham"
// // phone : "1-770-736-8031 x56442"
// // username : "Bret"
// // website : "hildegard.org"


// Example Local List 
Users = [
    {name:"jhon",email:"blabla@hotmail.com"},
    {name:"ana",email:"vacano@hotmail.com"},
]


// //In the list 
// let testName="Moriah.Stanton"
// let testEmail="Rey.Padberg@karina.biz"
//Not in the list
let testName=document.querySelector("#username")
console.log(testName)
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