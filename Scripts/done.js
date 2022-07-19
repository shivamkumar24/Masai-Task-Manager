// Write code related to Done page here
let pariorityArr=JSON.parse(localStorage.getItem("done-list")) || [];

pariorityArr.forEach(function (elem, index) {
    let tr = document.createElement("tr");
    let td1 = document.createElement("td");
    let td2 = document.createElement("td");
    let td3 = document.createElement("td");
    let td4 = document.createElement("td");
    let td5 = document.createElement("td");
    td1.innerText = elem.name;
    td2.innerText = elem.desc;
    td3.innerText = elem.start;
    td4.innerText = elem.end;
    td5.innerText = elem.prior;

    tr.append(td1, td2, td3, td4, td5);
    document.querySelector("tbody").append(tr);
});