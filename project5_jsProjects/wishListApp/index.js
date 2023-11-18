

let todoInput = document.querySelector('.input');
let addtodoButtom = document.querySelector('.button');
let showTools = document.querySelector(".todos-container");
let todo;

let localData = JSON.parse(localStorage.getItem('todo'));
let todoList=localData || [];

// creating funtion to create id for todo

function uuid () {
    let dateString = Date.now().toString(36);
    let randomness = Math.random().toString(36).substr(2);
    return dateString + randomness;
  }

addtodoButtom.addEventListener('click', (e)=>{
    e.preventDefault();
    todo = todoInput.value;
    if(todo.length > 0)
    {
        todoList.push({id:uuid(),todo, isCompleted:false});
    }
    renderTodoList(todoList);
    localStorage.setItem("todo",JSON.stringify(todoList));
    todoInput.value ="";
    
})

showTools.addEventListener("click",(e)=>{
    let key=e.target.dataset.key;
    let delTodoKey = e.target.dataset.todokey;
    todoList = todoList.map( todo =>todo.id === key ? {...todo, isCompleted: !todo.isCompleted} :todo);
    todoList = todoList.filter(todo=>todo.id !== delTodoKey);
    localStorage.setItem("todo",JSON.stringify(todoList));
    renderTodoList(todoList);
    
});

function renderTodoList (todoList){
    console.log(todoList);
    showTools.innerHTML= todoList.map(({id,todo,isCompleted})=> `<div class="todo relative"> <input class="t-checkbox t-pointer" id="item-${id}" type="checkbox"  ${isCompleted?"checked":""} data-key=${id}  > <label for="item-${id}" class=" ${isCompleted ? "checked-todo" : ""} todo todo-text t-pointer " data-key=${id}> ${todo}</label> <button class="absolute right-0 button cursor"> <span data-todokey=${id} class="del-btn material-symbols-outlined">
    delete
    </span> </button> </div>`)
}

renderTodoList(todoList);







