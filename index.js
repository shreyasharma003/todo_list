// document.querySelector("form").addEventListener("submit", myTodo);

// let todoArr;
// if (localStorage.getItem("todoArr") == null) {
//     todoArr = []
// }
// else {
//    todoArr =  JSON.parse(localStorage.getItem("todoArr"))
// }
// displayTable(todoArr)

// function myTodo() {
//   event.preventDefault();
//   var task = document.querySelector("#task").value;
//   var priority = document.querySelector("#priority").value;

//   let todoObj = {
//     task,
//     priority,
//   };
//     todoArr.push(todoObj);
//     localStorage.setItem("todoArr",JSON.stringify(todoArr));

//   displayTable(todoArr);
// }

// function displayTable(todoArr) {
//   document.querySelector("tbody").innerHTML = "";
//   todoArr.map(function (elem,index) {
//     var tr = document.createElement("tr");
//     var td1 = document.createElement("td");
//     td1.innerText = elem.task;

//     var td2 = document.createElement("td");
//     td2.innerText = elem.priority;

//     if (elem.priority == "High") {
//       td2.style.backgroundColor = "red";
//     } else {
//       td2.style.backgroundColor = "green";
//     }

//       var td3 = document.createElement("td");
//       td3.addEventListener("click", function(){
//           //  event.target.parentNode.remove();
//           rowremove(elem,index);
//        });
//     td3.innerText = "Delete";
//     td3.style.backgroundColor = "red";

//     tr.append(td1, td2, td3);
//     document.querySelector("tbody").append(tr);
//   });

// }

// function rowremove(elem, index) {
//     todoArr.splice(index, 1)
//     localStorage.setItem("todoArr",JSON.stringify(todoArr));
//     displayTable(todoArr)

// }

    

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
  // console.log(arr);
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
      col2.style.backgroundColor = "red";
    } else {
      col2.style.backgroundColor = "green";
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


// let ar = [1, 2, 3, 4, 5]
// ar.splice(1, 2)
// console.log(ar);


