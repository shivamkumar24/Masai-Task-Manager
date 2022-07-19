// Write code related to Home page here 
document.querySelector("form").addEventListener("submit",task);
let taskArr=JSON.parse(localStorage.getItem("task-list")) || [];

function task(event){
    event.preventDefault();
    let taskObj={
        name:document.querySelector("#name").value,
        desc:document.querySelector("#desc").value,
        start:document.querySelector("#start").value,
        end:document.querySelector("#end").value,
        prior:document.querySelector("#priority").value,
    }
    // console.log(taskObj);
    taskArr.push(taskObj);
    localStorage.setItem("task-list",JSON.stringify(taskArr));
}