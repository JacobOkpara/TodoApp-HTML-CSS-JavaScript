let input = document.querySelector("#target");
let btn = document.querySelector("#btn");
let list = document.querySelector("ul");

const todolist = [];

function addTodo() {
  todolist.unshift(input.value);
  setTodo();
  console.log(todolist);
}

function setTodo() {
  let htmlArr = "";
  for (i = 0; i < todolist.length; i++) {
    let item = `<li> <div>${todolist[i]}</div> <div>
        <button>Edit</button>
        <button>Delate</button>
    </div>
    </li>`;

    htmlArr += item;
  }
  list.innerHTML = htmlArr;
}

btn.addEventListener("click", addTodo);
