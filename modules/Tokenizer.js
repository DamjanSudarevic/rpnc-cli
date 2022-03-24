const Arithmetic_Operators = {
    "+": (a, b) => (b + a),
    "-": (a, b) => (b - a),
    "*": (a, b) => (b * a),
    "**": (a, b) => (b ** a),
    "/": (a, b) => (b / a),
    "//": (a, b) => Math.floor(b / a),
    "%": (a, b) => (b % a),
};
const Constants = {
    "PI": () => Math.PI,
    "E": () => Math.E,
    "LOG2E": () => Math.LOG2E,
    "LOG10E": () => Math.LOG10E,
    "LN2": () => Math.LN2,
    "LN10": () => Math.LN10
};
function isNumber(value) {
    const maybeNumber = parseInt(value);
    return !isNaN(maybeNumber);
}
function isArithmeticOperator(value) {
    return value in Arithmetic_Operators;
}
function isConstant(value) {
    return value.toUpperCase() in Constants;
}
export default class Tokenizer {
    TokenizeList(list) {
        return list.map((element) => {
            if (isConstant(element)) {
                return {
                    type: "Constant",
                    value: Constants[element.toUpperCase()]()
                };
            }
            if (isNumber(element)) {
                return {
                    type: "Number",
                    value: parseInt(element)
                };
            }
            if (isArithmeticOperator(element)) {
                return {
                    type: "Operator",
                    value: element
                };
            }
            return null;
        });
    }
    EvalTokens(token_list, stack) {
        token_list.forEach((token) => {
            if (token === null)
                return;
            switch (token.type) {
                case "Constant":
                    stack.push(token.value);
                    break;
                case "Number":
                    stack.push(token.value);
                    break;
                case "Operator":
                    if (stack.length < 2) {
                        console.error(`:: Operator \"${token.value}\" needs at least 2 numbers on the stack!`);
                        console.error(`:: Stack: ${stack}`);
                        break;
                    }
                    const a = stack.pop();
                    const b = stack.pop();
                    stack.push(Arithmetic_Operators[token.value](a, b));
                    break;
            }
        });
    }
}
