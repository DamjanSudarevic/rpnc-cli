var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Stack_stack;
export default class Stack {
    constructor() {
        _Stack_stack.set(this, void 0);
        __classPrivateFieldSet(this, _Stack_stack, [], "f");
    }
    get stack() {
        return __classPrivateFieldGet(this, _Stack_stack, "f");
    }
    get length() {
        return __classPrivateFieldGet(this, _Stack_stack, "f").length;
    }
    log() {
        __classPrivateFieldGet(this, _Stack_stack, "f").forEach((element) => {
            console.log(element);
        });
        console.log();
    }
    push(...values) {
        values.forEach((value) => {
            __classPrivateFieldGet(this, _Stack_stack, "f").push(value);
        });
        return __classPrivateFieldGet(this, _Stack_stack, "f").length;
    }
    pop() {
        return __classPrivateFieldGet(this, _Stack_stack, "f").pop();
    }
}
_Stack_stack = new WeakMap();
