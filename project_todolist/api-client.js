//Post
const postTasks = async function (description, done) {
    const apiURL = `https://wincacademydatabase.firebaseio.com/dilara/tasks.json`;
    fetch(apiURL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ description: description, done: done })
    });

}


//Delete
const deleteTasks = async function (description, done) {
    fetch("https://wincacademydatabase.firebaseio.com/dilara/tasks.json", {
        method: "DELETE",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ description: description, done: done })
    })
}


//Get
const getTasks = async function () {
    const apiURL =
        "https://wincacademydatabase.firebaseio.com/dilara/tasks.json";
    try {
        const result = await fetch(apiURL, { method: "GET" });
        const data = await result.json();

        console.log("Before ", data);
        let tasks = Object.keys(data).map(key => ({
            id: key,
            description: data[key].description,
            done: data[key].done
        }))
        console.log("After ", tasks);
    }
    catch (e) {
        return e;
    };

}

postTasks();
getTasks();










