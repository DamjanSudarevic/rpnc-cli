import { question } from "readline-sync";
import Stack from "./modules/Stack.js";
import Tokenizer from "./modules/Tokenizer.js";
function main() {
    const expr = question(":: ");
    const expr_as_list = expr.trim().split(" ");
    const tokenizer = new Tokenizer();
    const token_list = tokenizer.TokenizeList(expr_as_list);
    if (token_list.length < 1) {
        console.error(":: Cannot parse empty expression!");
        return main();
    }
    const stack = new Stack();
    tokenizer.EvalTokens(token_list, stack);
    stack.log();
    return main();
}
main();
