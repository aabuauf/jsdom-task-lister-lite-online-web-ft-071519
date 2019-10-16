document.addEventListener("DOMContentLoaded", () => {
  // your code here
  var submitButton = document.getElementById("submit")
  submitButton.addEventListener("click", function (e) {
    e.preventDefault()
    var inputTask = document.getElementById("new-task-description").value
    var ulListTask = document.getElementById("tasks")
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(inputTask));
    ulListTask.appendChild(li);
    document.getElementById("new-task-description").value = ""
  });



});

