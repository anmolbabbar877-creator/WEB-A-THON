// javascript
//1.REGISTER BUTTON
const registerButtons = document.querySelectorAll(".register-button, .secondary, .register-main-button");
registerButtons.forEach(function(button){
    button.addEventListener("click", function(event){
        event.preventDefault();
        alert("Registration for NIRVAN'26 is opening soon!");
    });
});
//2.EVENT DETAILS BUTTONS
const eventButtons= document.querySelectorAll(".event-button");
eventButtons.forEach(function(button)
{
    button.addEventListener("click",function() {
        const eventName= this.parentElement.querySelector("h3").innerText;
        alert("You selected:" + eventName +"\n\nMore details coming soon!");
    });
});
//3. SIMPLE COUNTDOWN

   