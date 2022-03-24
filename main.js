import { question } from "readline-sync";
const Operators = {
    "+": (a, b) => (a + b),
    "-": (a, b) => (b - a),
    "*": (a, b) => (a * b),
    "/": (a, b) => (b / a),
    "%": (a, b) => (b % a),
    "//": (a, b) => Math.round(b / a)
};
function isNumber(value) {
    const maybeNumber = parseInt(value);
    return !isNaN(maybeNumber);
}
function isOperator(value) {
    return value in Operators;
}
function main() {
    const expression = question(":: ").trim().split(" ");
    const token_list = expression.map((element) => {
        if (isNumber(element)) {
            return {
                type: "Integer",
                value: parseInt(element)
            };
        }
        if (isOperator(element)) {
            return {
                type: "Operator",
                value: element
            };
        }
        return null;
    });
    if (token_list.length < 1) {
        console.error(":: Cannot parse empty expression!");
        return main();
    }
    const stack = [];
    token_list.forEach((token) => {
        if (token === null)
            return;
        switch (token.type) {
            case "Integer":
                stack.push(token.value);
                break;
            case "Operator":
                if (stack.length < 2) {
                    console.error(`:: Operator \"${token.value}\" needs at least 2 numbers on the stack!`);
                    console.error(`:: Stack: ${stack}`);
                    return main();
                }
                const a = stack.pop();
                const b = stack.pop();
                stack.push(Operators[token.value](a, b));
                break;
        }
    });
    stack.forEach((value) => {
        console.log(value);
    });
    console.log();
    return main();
}
main();
