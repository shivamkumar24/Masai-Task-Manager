// Write code for the Progress page here 
// let taskArr = JSON.parse(localStorage.getItem("task-list")) || [];
let dashboardArr = JSON.parse(localStorage.getItem("priority-list")) || [];
let pariorityArr=JSON.parse(localStorage.getItem("done-list")) || [];

dashboardArr.forEach(function (elem, index) {
    let tr = document.createElement("tr");
    let td1 = document.createElement("td");
    let td2 = document.createElement("td");
    let td3 = document.createElement("td");
    let td4 = document.createElement("td");
    let td5 = document.createElement("td");
    let td6 = document.createElement("td");
    td1.innerText = elem.name;
    td2.innerText = elem.desc;
    td3.innerText = elem.start;
    td4.innerText = elem.end;
    td5.innerText = elem.prior;
    td6.innerText = "Add";
    td6.addEventListener("click", function () {
        addTaskInDone(elem, index);
        deleteTask(elem, index);
    });

    tr.append(td1, td2, td3, td4, td5, td6);
    document.querySelector("tbody").append(tr);
});

function addTaskInDone(elem, index) {
    pariorityArr.push(elem);
    localStorage.setItem("done-list", JSON.stringify(pariorityArr));
}
function deleteTask(elem, index) {
    dashboardArr.splice(index, 1);
    localStorage.setItem("priority-list", JSON.stringify(dashboardArr));
}