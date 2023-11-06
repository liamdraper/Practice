
const todos = [];

// HTML elements

const btn = document.querySelector('button');
const ul = document.querySelector('ul');
const text = document.querySelector('textarea');

// Event Listeners

btn.addEventListener('click', ()=> {
    addTodo();
})

// Functions

function addTodo() {
    // need to:  create element to hold
    const todo = document.createElement('li');
    todo.innerText = text.value;
    const editBtn = document.createElement('button');
    editBtn.innerText = 'Edit';
    editBtn.addEventListener('click', editTodo);
    const deleteBtn = document.createElement('button');
    deleteBtn.innerText = 'Delete';
    deleteBtn.addEventListener('click', deleteTodo);
    ul.appendChild(todo);
    todo.appendChild(editBtn);
    todo.appendChild(deleteBtn);
    text.value = '';
    console.log(todo);
}

function editTodo(e) {
    const editTextArea = document.createElement('textarea');
    editTextArea.innerText = e.target.parentNode.innerText;
    e.target.parentNode.appendChild(editTextArea);
    const closeEditBtn = document.createElement('button');
    closeEditBtn.innerText = 'X';
    const saveEdit = document.createElement('button');
    saveEdit.innerText = 'Save';
    editTextArea.appendChild(closeEditBtn, saveEdit);
    console.log(editTextArea, e.target.parentNode);
    // need to wrap the text area and 2 buttons inside a div

}

function deleteTodo(e) {
    ul.removeChild(e.target.parentNode);
}

