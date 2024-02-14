
const newTodoInput = document.getElementById("newTodoInput");
const todoList = document.getElementById("todoList");


function addTodo() {
    const todoText = newTodoInput.value.trim();
    if (todoText !== "") {
        
        const todoItem = document.createElement("li");
        todoItem.textContent = todoText;

        
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.addEventListener("change", function() {
            if (this.checked) {
                todoItem.classList.add("done");
            } else {
                todoItem.classList.remove("done");
            }
        });
        todoItem.appendChild(checkbox);

        
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.addEventListener("click", function() {
            todoItem.remove();
        });
        todoItem.appendChild(deleteButton);

        
        todoList.appendChild(todoItem);

        
        newTodoInput.value = "";
    }
}
