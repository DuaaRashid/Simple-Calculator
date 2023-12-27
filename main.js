// Develop a simple command line calculator 
import inquirer from 'inquirer';
let calculator = await inquirer.prompt([{
        type: "number",
        name: "operation",
        message: "Choose any one operation. 1)Addition 2)Subtraction 3)Multiplication 4)Division : "
    } //Taking input using prompt to choose operation
    ,
    {
        type: "number",
        name: "num1",
        message: "Enter first number: "
    } //Taking first number to make an expression
    ,
    {
        type: "number",
        name: "num2",
        message: "Enter second number: "
    } //Taking second number to complete an expression
]);
function sum() {
    console.log(`${calculator.num1} + ${calculator.num2} = ${calculator.num1 + calculator.num2}`);
}
function sub() {
    console.log(`${calculator.num1} - ${calculator.num2} = ${calculator.num1 - calculator.num2}`);
}
function mult() {
    console.log(`${calculator.num1} x ${calculator.num2} = ${calculator.num1 * calculator.num2}`);
}
function div() {
    console.log(`${calculator.num1} / ${calculator.num2} = ${calculator.num1 / calculator.num2}`);
}
if (calculator.operation == 1) {
    sum();
}
else if (calculator.operation == 2) {
    sub();
}
else if (calculator.operation == 3) {
    mult();
}
else if (calculator.operation == 4) {
    div();
}
else {
    console.log("Invalid Operation Choosed");
}
