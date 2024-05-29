import inquirer from "inquirer";
let todos = [];
let conditions = true;
let main = async () => {
    while (conditions) {
        let option = await inquirer.prompt([
            {
                name: "choice",
                message: "Select an option you want to do :",
                type: "list",
                choices: ["Add Task", "Delete Task", "Update Task", "View Todo-List", "Exit"],
            }
        ]);
        if (option.choice === "Add Task") {
            await addTask();
        }
        else if (option.choice === "Delete Task") {
            await deleteTask();
        }
        else if (option.choice === "View Todo-List") {
            await viewTask();
        }
        else if (option.choice === "Exit") {
            conditions = false;
        }
    }
};
//function to add new task to the list.
let addTask = async () => {
    let newTask = await inquirer.prompt([
        {
            name: "task",
            message: "Enter your new task :",
            type: "input"
        }
    ]);
    todos.push(newTask.task);
    console.log(`\n ${newTask.task} task added successfully in your Todo-List`);
};
//Function to view all Todo-List tasks
let viewTask = async () => {
    console.log("\n Your Todo-List: \n");
    todos.forEach((task, index) => {
        console.log(`${index}: ${task} `);
    });
};
// fiunction to delete a task from list
let deleteTask = async () => {
    await viewTask();
    let taskIndex = await inquirer.prompt([
        {
            name: "index",
            message: "Enter the 'index no.' of the task you want to delete :",
            type: "number"
        }
    ]);
    let deletedTask = todos.splice(taskIndex.index, 1);
    console.log(`\n '${deletedTask}' this task has been deleted successfully from your Todo-List \n`);
};
main();
