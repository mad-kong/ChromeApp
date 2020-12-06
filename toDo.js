const toDoForm = document.querySelector(".js-toDoForm"),
    toDoInput = toDoForm.querySelector("input")
    toDoList = document.querySelector(".js-toDoList");
const TODOS_LS = "toDos";
let toDos = [];

function init(){
    WriteToDo();
    loadToDos();
}

function loadToDos(){
    const loadedToDos = localStorage.getItem(TODOS_LS);
    if(loadedToDos !== null){
        const parsedToDos = JSON.parse(loadedToDos);
        parsedToDos.forEach(function(toDo){
            paintToDo(toDo.text)
        })
    }
}
function WriteToDo(){
    toDoForm.addEventListener("submit",function(event){
        event.preventDefault();
        const currentValue = toDoInput.value;
        paintToDo(currentValue);
        toDoInput.value = "";
    })
}

function paintToDo(text){
    const div = document.createElement("div");
    const newId = toDos.length + 1
    const span = document.createElement("span");
    const delBtn = document.createElement("button")
    span.innerText = text;
    delBtn.innerText = "❌";
    div.appendChild(delBtn);
    div.appendChild(span);
    div.id = newId;
    toDoList.appendChild(div);
    const toDoObj  = {
        text : text,
        id : newId
    }    
    toDos.push(toDoObj);
    saveToDo();
    delBtn.addEventListener("click",function(event){
        //event.target 는 이벤트가 적용된 객체의 정보를 가져옴.  이경우 ❌를 누른 객체의 정보를 가져온다
        const deleteToDo = event.target;
        const deleteLi = deleteToDo.parentNode;
        toDoList.removeChild(deleteLi);
        const cleanToDos = toDos.filter(function(todo){
            return todo.id !== parseInt(deleteLi.id);
        })
        toDos = cleanToDos;
        saveToDo()
    })
}

function saveToDo(){
    localStorage.setItem(TODOS_LS,JSON.stringify(toDos))
}

init();