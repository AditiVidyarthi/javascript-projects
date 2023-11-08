const todoList = [{
    name: 'make dinner',
    date: '2022-12-22'
  }, {
    name: 'wash dishes',
    date: '2022-12-22'
  }];
displayTodoList();
function displayTodoList() {
    let todoListHTML='';
    todoList.forEach((todoListEle, index) => {
        const {name, date}=todoListEle;
        const html= `
                        <section>${name}</section> 
                        <section>${date}</section>
                        <button class="del-button" onclick="
                            todoList.splice(${index},1);
                            displayTodoList();
                            ">Delete
                        </button>
                    `;
        todoListHTML+=html;
    });
/*     for(let i=0;i<=todoList.length-1;i++) {
        const todoListEle=todoList[i];
        //const name=todoListEle.name;
        //const date=todoListEle.date; 
        const {name, date}=todoListEle;
        const html= `
                        <section>${name}</section> 
                        <section>${date}</section>
                        <button class="del-button" onclick="
                            todoList.splice(${i},1);
                            displayTodoList();
                            ">Delete
                        </button>
                    `;
        todoListHTML+=html;
    } */
    document.querySelector('.display-todo').innerHTML = todoListHTML;
}

function addTodo() {
    const inputEle=document.querySelector('.task-input');
    const date = document.querySelector('.date-input');
    if(inputEle.value)
    {   todoList.push({
            name: inputEle.value, 
            date: date.value 
        });
        console.log("Item Added");
        console.log(todoList);
        inputEle.value="";
        displayTodoList();
    }
}
/* function clear() {
    document.querySelector('input').placeholder="Todo Name";
} */
