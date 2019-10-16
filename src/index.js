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



  // locate your element and add the Click Event Listener
  document.getElementById("tasks").addEventListener("click", function (e) {
    // e.target is our targetted element.
    // try doing console.log(e.target.nodeName), it will result LI
    if (e.target && e.target.nodeName == "LI") {
      e.target.style.color = "#ff0000";
    }
  });

});

