const loginForm = document.querySelector("#login-form")
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");
const todoForm = document.querySelector("#todo-form");
const todoList = document.querySelector("#todo-list");
const quoteQuote = document.querySelector("#quote span:first-child");
const quoteAuthor = document.querySelector("#quote span:last-child");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event){
	event.preventDefault(); //브라우저가 기본 동작 실행 못하게 막아줌
	loginForm.classList.add(HIDDEN_CLASSNAME);
	const username = loginInput.value;
	localStorage.setItem(USERNAME_KEY, username);
	paintGreetings(username);
}

function paintGreetings(username){
	greeting.innerText = `Hello ${username}`; //따옴표 아니고 백틱
	greeting.classList.remove(HIDDEN_CLASSNAME);
	todoForm.classList.remove(HIDDEN_CLASSNAME);
	todoList.classList.remove(HIDDEN_CLASSNAME);
	quoteQuote.classList.remove(HIDDEN_CLASSNAME);
	quoteAuthor.classList.remove(HIDDEN_CLASSNAME);
}
const savedUsername = localStorage.getItem(USERNAME_KEY);

if(savedUsername === null){
	loginForm.classList.remove(HIDDEN_CLASSNAME);
	loginForm.addEventListener("submit", onLoginSubmit);
}else{
	paintGreetings(savedUsername);
}
