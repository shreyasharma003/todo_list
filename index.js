let form = document.querySelector("form");
form.addEventListener("submit", datafun);

let arr = [];
function datafun() {
  event.preventDefault();
  let task = document.getElementById("task").value;

  let pre = document.getElementById("priority").value;

  let data_obj = {
    task: task,
    preority: pre,
  };

    arr.push(data_obj);
    display(arr);
  
}



let tbody = document.querySelector("tbody");
function display(data) {
    tbody.innerHTML = "";
  data.forEach(function (el, index) {
    let row = document.createElement("tr");
    let col1 = document.createElement("td");
    col1.innerText = el.task;
    let col2 = document.createElement("td");
    col2.innerText = el.preority;
    if (el.preority == "High") {
      col2.style.backgroundColor = "orange";
    } else {
      col2.style.backgroundColor = "cyan";
    }

      let col3 = document.createElement("td");
      col3.addEventListener("click", function () {
          del(index)
      })
    col3.innerText = "Delete";
    col3.style.backgroundColor = "red";

    row.append(col1, col2, col3);

    tbody.appendChild(row);
  });
}

function del(index) {
    arr.splice(index, 1)
    display(arr)
}




