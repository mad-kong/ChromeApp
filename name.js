const form = document.querySelector(".js-submitting"),
    input = form.querySelector("input");
const NAME_LS = "currentName";
const SHOWING_CN = "showing"
const greeting = document.querySelector(".js-greeting")

function init(){
    loadName();
}

init();

function loadName(){
    const currentName = localStorage.getItem(NAME_LS);
    if(currentName === null){
        submitName();
    }
    else{
        const name = localStorage.getItem(NAME_LS)
        paintName(name)
    }
}

function submitName(){
    form.classList.add(SHOWING_CN)
    form.addEventListener("submit",handleSubmit)
}

function handleSubmit(event){
    event.preventDefault();
    const currentValue = input.value;
    paintName(currentValue)
    saveName(currentValue);
}

function paintName(name){
    form.classList.remove(SHOWING_CN)
    greeting.classList.add(SHOWING_CN)
    greeting.innerText = `Hello! ${name}`
}

function saveName(name){
    localStorage.setItem(NAME_LS,name)   
}