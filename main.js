#! /usr/bin/env node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const inquirer_1 = __importDefault(require("inquirer"));
let todo = [];
let condition = true;
while (condition) {
    let addtask = await inquirer_1.default.prompt([
        {
            message: "what do you want to do in your todos?",
            type: "list",
            name: "todos",
            choices: ["Read", "Add", "Delet", "Update"]
        },
        {
            message: "what  you want to add in your todos?",
            type: "string",
            name: "add",
        },
        {
            message: "Do you want to delet from your todo?",
            type: "confirm",
            name: "delet",
        },
        {
            message: "Do you want to add in your todo?",
            type: "confirm",
            name: "add",
        },
        {
            message: "Do you want to update your todo?",
            type: "confirm",
            name: "update",
        },
    ]);
    if (addtask.todos == "add") {
        //console.log(todo= addtask.add);
        todo.push(todo = addtask.add);
        console.log(todo);
        // todo=addtask.add;
        // console.log(todo);
        // condition=addtask.addmore;
    }
    if (addtask.todos == "Delet") {
        todo.delet(todo = addtask.delet);
        console.log(todo);
    }
}
// {
//     message:"Do you want to add more in your todos?",
//     type: "confirm", // answer from user in yes or no.
//     name:"addmore",
//     default:"true",  //that means if user either give input or not, it will be consiered as true. 
//     },
