# rpnc-cli

This program is free software. It comes without warranty, to the
extent permitted by appliccable law. You may redistribute and/or
modify it under the terms of the Do Whatever You Want (DWYW) license.
See https://jmthornton.net/dwyw for more details.

rpnc-cli is a basic cli calculator using Reverse Polish Notation (RPN).
Reverse Polish notation (RPN) is a method for representing expressions
in which the operator symbol is placed after the arguments being operated on.

For example a sum of numbers 2 and 3 would look something like this in RPN:
2 3 +

RPN has the property that brackets are not required to represent the order
of evaluation or grouping of the terms.
RPN expressions are simply evaluated from left to right and this greatly
simplifies the computation of the expression.

For example the arithmetic expression (3 + 4) * 5 can be expressed like this:
3 4 + 5 *

Sources:
Reverse Polish Notation
- https://mathworld.wolfram.com/ReversePolishNotation.html
What is Reverse Polish Notation?
- https://www.calculator.org/articles/Reverse_Polish_Notation.html