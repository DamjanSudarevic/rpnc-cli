var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Tokenizer_instances, _Tokenizer_isNumber, _Tokenizer_isOperator, _Tokenizer_isConstant;
const Operators = {
    "+": (a, b) => (a + b),
    "-": (a, b) => (b - a),
    "*": (a, b) => (a * b),
    "/": (a, b) => (b / a),
    "%": (a, b) => (b % a),
    "//": (a, b) => Math.round(b / a)
};
const Constants = {
    "PI": Math.PI,
    "E": Math.E,
    "LOG2E": Math.LOG2E,
    "LOG10E": Math.LOG10E,
    "LN2": Math.LN2,
    "LN10": Math.LN10
};
export default class Tokenizer {
    constructor() {
        _Tokenizer_instances.add(this);
    }
    TokenizeList(list) {
        return list.map((element) => {
            if (__classPrivateFieldGet(this, _Tokenizer_instances, "m", _Tokenizer_isConstant).call(this, element)) {
                return {
                    type: "Constant",
                    value: Constants[element.toUpperCase()]
                };
            }
            if (__classPrivateFieldGet(this, _Tokenizer_instances, "m", _Tokenizer_isNumber).call(this, element)) {
                return {
                    type: "Integer",
                    value: parseInt(element)
                };
            }
            if (__classPrivateFieldGet(this, _Tokenizer_instances, "m", _Tokenizer_isOperator).call(this, element)) {
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
                case "Integer":
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
                    stack.push(Operators[token.value](a, b));
                    break;
            }
        });
    }
}
_Tokenizer_instances = new WeakSet(), _Tokenizer_isNumber = function _Tokenizer_isNumber(value) {
    const maybeNumber = parseInt(value);
    return !isNaN(maybeNumber);
}, _Tokenizer_isOperator = function _Tokenizer_isOperator(value) {
    return value in Operators;
}, _Tokenizer_isConstant = function _Tokenizer_isConstant(value) {
    return value.toUpperCase() in Constants;
};
