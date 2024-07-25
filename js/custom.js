const burger = document.querySelector(".burger i");
console.log(burger)
const nav = document.querySelector(".bar-nav");
console.log(nav)

function showHamburger() {
  burger.classList.toggle("fa-times");
  nav.classList.toggle("nav-active")
}


//form 

const form = document.getElementById("form");
let userArray = [];

form.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
	event.preventDefault();
	const data = new FormData(event.target);
	const dataObject = Object.fromEntries(data.entries());

	userArray.push(dataObject);
	console.log(userArray);
	form.reset();
}