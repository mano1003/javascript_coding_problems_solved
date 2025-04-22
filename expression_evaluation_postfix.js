function evaluatePostfix(expr) {
    const stack = [];
    const tokens = expr.split(" ");
  
    tokens.forEach(token => {
      if (!isNaN(token)) {
        console.log("The token is " + token);
        stack.push(Number(token));
        console.log("The Numbers Stack " + stack)
      } else {
        const b = stack.pop();
        const a = stack.pop();
        console.log("The symbol stack after poping the two numbers " + token)
        switch (token) {
          case '+': stack.push(a + b); console.log("The token is " + stack); break;
          case '-': stack.push(a - b); console.log("The token is " + stack); break;
          case '*': stack.push(a * b); console.log("The token is " + stack); break;
          case '/': stack.push(a / b); console.log("The token is " + stack); break;
        }
      }
    });
    console.log("The Final Stack " + stack)
    return stack.pop();
  }
  
  console.log(evaluatePostfix("5 3 + 8 * 2 + 3 / 4 -")); // Output: 64