const addToDoButton = document.getElementById("addbutton");
const toDoContainer = document.getElementById("toDoContainer");
const inputField = document.getElementById("container");
const deleteAllBtn = document.querySelector(".footer button");
//const enterbutton=document.querySelector("body");
showTasks();
addToDoButton.addEventListener("click", () => {
  let userEnteredValue = inputField.value; //getting input field value
  let getLocalStorageData = localStorage.getItem("New Todo"); //getting localstorage
  if (getLocalStorageData == null) {
    //if localstorage has no data
    listArray = []; //create a blank array
  } else {
    listArray = JSON.parse(getLocalStorageData); //transforming json string into a js object
  }
  listArray.push(userEnteredValue); //pushing or adding new value in array
  localStorage.setItem("New Todo", JSON.stringify(listArray)); //transforming js object into a json string
  showTasks();
});

//show on UI page
function showTasks() {
  let getLocalStorageData = localStorage.getItem("New Todo");
  if (getLocalStorageData == null) {
    listArray = [];
  } else {
    listArray = JSON.parse(getLocalStorageData);
  }
  const pendingTasksNumb = document.querySelector(".pendingTasks");
  pendingTasksNumb.textContent = listArray.length; //passing the array length in pendingtask
  let newLiTag = "";
  listArray.forEach((element, index) => {
    newLiTag += `<li>${element}<span class="icon" onclick="deleteTask(${index})"><i class="fas fa-trash"></i></span></li>`;
  });
  toDoContainer.innerHTML = newLiTag; //adding new li tag inside ul tag
  inputField.value = ""; //once task added leave the input field blank
}

//delete task
function deleteTask(index) {
  confirm("Press a button!");

  let getLocalStorageData = localStorage.getItem("New Todo");
  listArray = JSON.parse(getLocalStorageData);
  listArray.splice(index, 1); //delete or remove the li
  localStorage.setItem("New Todo", JSON.stringify(listArray));
  showTasks(); //call the showTasks function
}

// delete all tasks function

deleteAllBtn.addEventListener("click", () => {
  listArray = []; //empty the array
  localStorage.setItem("New Todo", JSON.stringify(listArray)); //set the item in localstorage
  showTasks(); //call the showTasks function
});
