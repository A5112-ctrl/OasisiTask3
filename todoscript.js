document.addEventListener("DOMContentLoaded", function() {
    const taskInput = document.getElementById("taskInput");
    const addTaskButton = document.getElementById("addTask");
    const taskList = document.getElementById("taskList");

    addTaskButton.addEventListener("click", function() {
        const taskText = taskInput.value.trim();

        if (taskText !== "") {
            const listItem = document.createElement("li");
            listItem.innerHTML = `
                <span class="task-text">${taskText}</span>
                <button class="edit-button">Edit</button>
                <button class="delete-button">Delete</button>
            `;
            taskList.appendChild(listItem);

            // Clear the input field
            taskInput.value = "";

            // Add event listeners for edit and delete buttons
            const editButton = listItem.querySelector(".edit-button");
            const deleteButton = listItem.querySelector(".delete-button");
            
            editButton.addEventListener("click", function() {
                const taskSpan = listItem.querySelector(".task-text");
                const updatedTaskText = prompt("Edit task:", taskSpan.textContent);
                
                if (updatedTaskText !== null) {
                    taskSpan.textContent = updatedTaskText;
                }
            });

            deleteButton.addEventListener("click", function() {
                listItem.remove();
            });
        }
    });
});