// javascript
//REGISTER BUTTON
const registerButtons = document.querySelectorAll(".register-button, .secondary.register-main-button");
button.addEventListener("click", function(event){
    event.preventDefault();
    alert("Registeration for NIRVAN'26 is opening soon!");s

});
//EVENT DETAILS BUTTONS
const eventButtons= document.querySelectorAll(".event-button");
eventButtons.forEach(function(button)
{
    button.addEventListener("click",function(){
        const eventName= this.parrentElement.querySelector("h3").innerText;
        alert("You selected:" + eventName);
    }
}