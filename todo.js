#! /user/bin/env node 
import inquirer from "inquirer";
let todo = [];
let condition = true;
while (condition) {
    let addTask = await inquirer.prompt([
        {
            name: "addtodo",
            message: "what you want to add in your todo.",
            type: "string",
        },
        {
            name: "addmore",
            message: "do you wat to add more?",
            type: "confirm",
            default: "false",
        },
    ]);
    todo.push(addTask.addtodo);
    condition = addTask.addmore;
}
console.log(todo);
// console.log(addTask.addtodo);
