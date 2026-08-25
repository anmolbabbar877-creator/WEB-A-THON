//javascript
// 1. REGISTER BUTTON
const registerButtons = document.querySelectorAll(".register-button, .secondary, .register-main-button");
registerButtons.forEach(function(button){
    button.addEventListener("click", function(event) {
        event.preventDefault();
        alert("Registration is opening soon!");
    });
});
<<<<<<< HEAD
//EVENT DETAILS BUTTONS
const eventButtons= document.querySelectorAll(".event-button");
<<<<<<< HEAD
eventButtons.forEach(function(button)){
    button.addEventListener("click",function(){
=======
eventButtons.forEach(function(button))
{
    button.addEventListener("click",function());
    {
>>>>>>> 8d59e070110445c54ee3254550ace94eb9735870
        const eventName= this.parrentElement.querySelector("h3").innerText;
        alert("You selected:" + eventName);
}
=======
// 2. EVENT BUTTONS
const eventButtons = document.querySelectorAll(".event-card button");
eventButtons.forEach(function(button) {
    button.addEventListener("click", function() {
        const eventName =
            this.parentElement.querySelector("h3").innerText;
        alert("You selected: " + eventName +"\n\nMore details coming soon!");
    });
});
//3.
>>>>>>> 327fb7c3a7c3e92ffa50636230df51dca3c639ea
