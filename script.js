// Create a Variable
const url = "https://baconipsum.com/api/?type=meat-and-filler&paras=1"
const button = document.getElementById("loadBtn");
const message = document.getElementById("messageText");

// Create a click event listener on the button
button.addEventListener("click", fetchMessage);

// Create async function that sends fetch request

async function fetchMessage() {
    try{
 const response = await fetch(url);
    const data = await response.json();

    message.textContent = data[0];
    message.style.color = "black";
   
    // Trigger fade-in animation
message.classList.remove("fade-in"); // remove it first in case it's still applied
void message.offsetWidth; // reflow to restart animation
message.classList.add("fade-in");

} catch(error){
console.log("Fetch error:",error);
  message.textContent = "Oops! Something went wrong.";
  message.style.color = "red";
  console.log("Fetch error:", error);

}
}


