const formAll = document.querySelector("#formAll");
const inputName = document.querySelector("#inputName");
const email = document.querySelector("#inputEmail");
const inputText = document.querySelector("#inputText");


console.log(formAll);


const submitButton = document.getElementById("subButton");
submitButton.addEventListener("click", (e) => {
    e.preventDefault();
    alert("Gracias por tu mensaje");
    inputName.value='';
    email.value='';
    inputText.value='';
});
