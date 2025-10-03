const taskInput = document.getElementById("taskToDo");
const taskList = document.getElementById("taskList");
const suggestionList = document.getElementById("suggestionList");
const addButton = document.getElementById("input-section-button");

// task input can be from suggestion click or input
function addTask(taskText) {
  const finalTaskText = taskText || taskInput.value.trim();
  // account for empty task list shown by empty string

  if (finalTaskText === "") {
    alert("Enter a task Please!");
    return;
  }
  // element.setAttribute("class","democlass")
  const listItem = document.createElement("li");
  listItem.setAttribute("item-completed", "false");

  // new span element to be created for text instead of innerHTML , emoji

  const taskSpan = document.createElement("span");
  taskSpan.textContent = finalTaskText;

  // classList.add is a method to add  the element ul in this case
  const emojiSpan = document.createElement("span");
  emojiSpan.classList.add("status-emoji");
  emojiSpan.textContent = "😿";

  // add the tasks and emoji to the span sections under task list and then add task list li created to the task list

  listItem.appendChild(taskSpan);
  listItem.appendChild(emojiSpan);

  // addEventListener on click
  // getAttribute () returns the value of an element's attribute
  // variable = element.getAttribute("class")

  listItem.addEventListener("click", function () {
    toggleCompleted(listItem, emojiSpan);
  });

  taskList.appendChild(listItem);

  // clear input if no task was inputed into system by user
  if (!taskText) {
    taskInput.value = "";
  }
}
// declare item as an argument in the function
function toggleCompleted(item, emojiElement) {
  const isComplete = item.getAttribute("item-completed") === "true";

  if (isComplete) {
    // I want to be able to toggle to not completed from completed items
    item.setAttribute("item-completed", "false");
    // classList.remove()method used on element to remove to the element
    item.classList.remove("completed");
    emojiElement.textContent = "😿";
  } else {
    item.setAttribute("item-completed", "true");
    // classList.add() method used on element to add to the element
    item.classList.add("completed");
    emojiElement.textContent = "😻";
  }
}
function addSuggestionListener() {
  // list all <li>elements inside the suggestionList
  const suggestions = suggestionList.getElementsByTagName("li");

  for (let i = 0; i < suggestions.length; i++) {
    const suggestionElement = suggestions[i];

    suggestionElement.addEventListener("click", function () {
      const taskText = suggestionElement.textContent.trim();
      addTask(taskText);
    });
  }
}
addButton.addEventListener("click", function () {
  // call addTask function without argument
  addTask();
});
addSuggestionListener();
