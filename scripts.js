let GoogleWebStore = ["Google", "Google Search", "Google Chrome", "Google Drive", "Google Maps", "Google Photos", "Google Play Store", "Google Translate", "Gmail", "YouTube"];
let SearchboxEl = document.getElementById("Searchbox");
let SpaceEl = document.getElementById("Space");
let SearchButtonEl = document.getElementById("SearchButton");
let SaveButtonEl = document.getElementById("SaveButton");
let ulEl = document.getElementById("ul-el");
const welcomeEl = document.getElementById("welcome");
let funEl = document.getElementById("fun");

SearchButtonEl.addEventListener("click", function () {
    let text = SearchboxEl.value;
    GoogleWebStore.push(text);
    console.log("added New item", text);
    ulEl.innerHTML += "<li> <a href ='#'>" + text + "</a></li>";

});
SaveButtonEl.addEventListener("click", function () {
    SpaceEl.textContent = "You have added: " + GoogleWebStore.join(", ");
    for (let i = 0; i < GoogleWebStore.length; i++) {
        console.log(GoogleWebStore[i]);
    }
});
// welcomeEl.innerHTML = "<button> Click Me </button>";
// welcomeEl.addEventListener("click", function () {
//     welcomeEl.innerHTML += "<p>Welcome to Google Web Store!</p>";
// });



// let a = "hello click the bellow button To introduce myself"
// let b = "i am a web developer"
// let c = `i want to say that - ${a} and touch ${b}`;
// console.log(c)


// localStorage.setItem("Name", "Google Web Store");
// let Name = localStorage.getItem("Name");
// console.log(Name);



// let z = ["hello"]
// z = JSON.stringify(z)
// console.log(z) // ["hello", "world"]
// console.log(typeof z) // "object"

// let credits = 0
// if (credits > 0) {
//     console.log("Lets go!")
// }
// else {
//     console.log("You have no credits, please buy more!")
// }


// // This function will greet the user with a message
// // It takes a parameter 'hello' and displays it in the funEl element
// function greeting(hello) {
//     funEl.innerHTML =` <h1> ${hello},"my name is",</h1> , ${hello}`
// }
// greeting("hii")

// function add(num1,num2){
//     return num1 + num2;
// }

// console.log(add(3,7))
