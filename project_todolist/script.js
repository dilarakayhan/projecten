let ul = document.querySelector("ul");
let input = document.querySelector("#task-input-bar");

const newTaskItem = function () {
    let text = document.createTextNode(input.value);
    let li = document.createElement("li");
    let btn = document.createElement("button");
    btn.id = "delete-btn";
    let img = document.createElement("img");
    img.src = "trash-icon.png";

    btn.appendChild(img);
    li.appendChild(text);
    li.appendChild(btn);

    if (input.value != "") {
        ul.appendChild(li);
    }
    input.value = "";

    btn.addEventListener("click", function () {
        li.parentNode.removeChild(li);
        deleteTasks();
    })
}

const addBtn = document.querySelector("#add-btn");

addBtn.addEventListener("click", function () {
    let addItem = document.querySelector("#task-input-bar").value;
    newTaskItem();
    postTasks(addItem, false);
});