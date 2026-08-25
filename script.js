//javascript
// 1. REGISTER BUTTON
const registerButtons = document.querySelectorAll(".register-button, .secondary, .register-main-button");
registerButtons.forEach(function(button){
    button.addEventListener("click", function(event) {
        event.preventDefault();
        alert("Registration is opening soon!");
    });
});
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